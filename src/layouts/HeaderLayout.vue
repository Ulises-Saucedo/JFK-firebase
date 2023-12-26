<script setup>
    const listItems = [
        {
            name: "Inicio",
            url: "/"
        },
        {
            name: "Especialidades",
            dropdown: [
                {
                    dropdownItem: "Electromecánica",
                    dropdownUrl: "/electromechanical"
                },
                {
                    dropdownItem: "Informática",
                    dropdownUrl: "/computing"
                },
                {
                    dropdownItem: "Programación",
                    dropdownUrl: "/programming"
                },
            ]
        },
        {
            name: "Inscripción",
            url: "/inscription"
        },
        {
            name: "Foro",
            url: "/forum"
        },
        {
            name: "Biblioteca",
            url: "/library"
        },
        {
            name: "Escuela",
            dropdown: [
                {
                    dropdownItem: "Galería",
                    dropdownUrl: "/gallery"
                },
                {
                    dropdownItem: "Historia",
                    dropdownUrl: "/history"
                }
            ]
        },
        {
            name: "Contacto",
            url: "/contact"
        }
    ]
</script>

<template>
    <div class="navbar bg-[#F8F7F3] border-b-[1px] border-neutral-200">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <template v-for="item in listItems">
                        <li v-if="!item.dropdown">
                            <router-link :to="item.url">
                                {{ item.name }}
                            </router-link>
                        </li>
                        <li v-else>
                            <details>
                                <summary>
                                    {{ item.name }}
                                </summary>
                                <ul>
                                    <li v-for="dropdownItem in item.dropdown">
                                        <router-link :to="dropdownItem.dropdownUrl">
                                            {{ dropdownItem.dropdownItem }}
                                        </router-link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="navbar-center">
            <router-link class="btn btn-ghost text-xl" to="/">
                <img src="../assets/logo.svg" alt="Logo de la escuela JFK" class="h-full">
            </router-link>
        </div>
        <slot name="searchbar">
        </slot>
    </div>
</template>