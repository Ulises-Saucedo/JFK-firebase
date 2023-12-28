<script setup>
    import HeaderLayout from '../layouts/HeaderLayout.vue';
</script>

<template>
    <HeaderLayout></HeaderLayout>
    <section class="p-5 mx-auto max-w-[800px] flex flex-col justify-center my-16">
        <RoughNotation type="highlight" :is-show="true" color="#FFD54F" tag="h1" class="text-4xl font-bold mx-auto">
            HISTORIA
        </RoughNotation>
        <p class="mt-5">
            La Escuela Técnica de Oficios de Lanús fue creada el 17 de abril de 1943, mediante el decreto Nº148065, con el propósito de formar obreros calificados en diversas actividades industriales. Inicialmente, la escuela carecía de taller, pero con el tiempo se trasladó a un nuevo local en 1945, equipado con modernos talleres.
        </p>
        <p class="mt-5">
            En 1952, la institución se transformó en la Escuela Industrial de la Nación, especializándose en Mecánica. Se realizaron esfuerzos para ampliar las instalaciones, y en 1959 se formó una cooperativa para construir un nuevo edificio con terreno cedido por el Estado Nacional. Se lanzó una campaña para recaudar fondos, y la piedra fundamental se colocó en 1963.
        </p>
        <p class="mt-5">
            En 1964, en homenaje a John Fitzgerald Kennedy, la escuela adoptó su nombre. En 1968, el taller comenzó a operar en el nuevo edificio. La institución se expandió con nuevas especialidades, como Electromecánica en 1969.
        </p>
        <p class="mt-5">
            En 1973, la escuela se mudó al nuevo edificio, que contaba con aulas, laboratorios, talleres, biblioteca y más. En 1982, se anexó un campo de deportes. En 1984, se creó un anexo para aliviar la sobrepoblación, y en 1988, este anexo se convirtió en la Escuela Nacional de Educación Técnica Nº3 con especialidad en Electrónica.
        </p>
        <p class="mt-5">
            En 1995, con la Ley Federal de Educación, se redujo la especialización técnica a tres años. En 1997, la escuela incorporó la modalidad Informática y aumentó las divisiones. En 2004, recuperó la pertenencia de los alumnos de 8º y 9º año. Actualmente, la escuela cuenta con alrededor de 1100 alumnos y se destaca en las evaluaciones anuales por capacidades a nivel regional y provincial.
        </p>
        <RoughNotation type="box" :is-show="true" color="#FF0000" tag="a" href="./src/assets/eet5_historia.pdf" class="w-full mt-8 text-center" target="_blank">
            Leer historia completa
        </RoughNotation>
    </section>
</template>

<style scoped>

</style>