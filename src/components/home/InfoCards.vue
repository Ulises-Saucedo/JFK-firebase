<script setup>
    import { KinesisContainer, KinesisElement} from 'vue-kinesis'
    const cardItems = [
        {
            icon: "bi-gear",
            title: "Electromecánica",
            content: "En nuestra orientación de Electromecánica, los estudiantes adquieren habilidades esenciales para trabajar con sistemas eléctricos y mecánicos."
        },
        {
            icon: "bi-motherboard",
            title: "Informática",
            content: "Nuestra orientación en Informática te sumerge en el emocionante mundo de la tecnología. Aprenderás a programar, administrar redes y comprender la ciberseguridad."
        },
        {
            icon: "bi-laptop",
            title: "Programación",
            content: "En nuestra orientación en programación, los estudiantes exploran el emocionante mundo de la codificación y el desarrollo de software."
        }
    ]
</script>

<template>
    <section class="w-full my-64">
        <h1 class="text-center font-bold text-[40px] mb-[40px]">
            <RoughNotation type="highlight" :is-show="true" color="#FFD54F">
                Especialidades
            </RoughNotation>
        </h1>
        <section class="w-full block lg:flex lg:justify-around">
            <kinesis-container tag="div" class="max-w-[600px] lg:max-w-[325px] xl:max-w-[415px] my-[10px] mx-auto h-[300px] lg:h-[325px] border-[1px] rounded p-[15px] my-5" v-for="item in cardItems">
                <kinesis-element tag="figure" class="text-center">
                    <v-icon scale="6" :name="item.icon"></v-icon>
                </kinesis-element>
                <kinesis-element :strength="10" tag="h3" class="text-center pt-2 text-[28px] font-normal">
                    {{ item.title }}
                </kinesis-element>
                <kinesis-element :strength="10" tag="p" class="text-[15px] pt-2 text-center text-balance">
                    {{ item.content }}
                </kinesis-element>
            </kinesis-container>
        </section>
    </section>
</template>