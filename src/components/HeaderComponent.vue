<script setup>
    import { FwbDropdown, FwbListGroup, FwbListGroupItem, FwbButton } from 'flowbite-vue'
    const listItems = [
        {
            name: "Inicio",
            icon: "co-home",
            url: "/"
        },
        {
            name: "Especialidades",
            iconDown: "hi-arrow-sm-down",
            iconUp: "hi-arrow-sm-up",
            dropdown: [
                {
                    dropdownItem: "Electromecánica",
                    dropdownIcon: "bi-gear",
                    dropdownUrl: "/electromechanical"
                },
                {
                    dropdownItem: "Informática",
                    dropdownIcon: "bi-motherboard",
                    dropdownUrl: "/computing"
                },
                {
                    dropdownItem: "Programación",
                    dropdownIcon: "bi-laptop",
                    dropdownUrl: "/programming"
                },
            ]
        },
        {
            name: "Inscripción",
            icon: "ri-file-paper-2-line",
            url: "/inscription"
        },
        {
            name: "Foro",
            icon: "bi-chat-left-dots",
            url: "/forum"
        },
        {
            name: "Biblioteca",
            icon: "bi-archive",
            url: "/library"
        },
        {
            name: "Escuela",
            iconDown: "hi-arrow-sm-down",
            iconUp: "hi-arrow-sm-up",
            dropdown: [
                {
                    dropdownItem: "Galería",
                    dropdownIcon: "bi-camera",
                    dropdownUrl: "/gallery"
                },
                {
                    dropdownItem: "Historia",
                    dropdownIcon: "bi-bank",
                    dropdownUrl: "/history"
                }
            ]
        },
        {
            name: "Contacto",
            icon: "bi-envelope-paper",
            url: "/contact"
        }
    ]
</script>

<template>
    <header class="w-full h-[65px] border-b-[1px]">
        <nav class="flex justify-center w-full h-full items-center">
            <template v-for="(item, i) in listItems">
                <fwb-button 
                    :key="i" 
                    :href="item.url"
                    tag="router-link"
                    color="default"
                    outline
                    v-if="!item.dropdown"
                    class="mx-2 my-auto"
                >
                    <v-icon :name="item.icon" class="mx-1"></v-icon>
                    <span>{{ item.name }}</span>
                </fwb-button>
                <fwb-dropdown v-else :text="item.name" class="mx-2 my-auto">
                    <fwb-list-group>
                        <fwb-list-group-item
                            v-for="(dropdownItem, dropdownIndex) in item.dropdown"
                            :key="dropdownIndex"
                        >
                            <router-link :to="dropdownItem.dropdownUrl">
                                <v-icon :name="dropdownItem.dropdownIcon" class="mx-1"></v-icon>
                                <span>{{ dropdownItem.dropdownItem }}</span>
                            </router-link>
                        </fwb-list-group-item>
                    </fwb-list-group>
                </fwb-dropdown>
            </template>
        </nav>
    </header>
</template>