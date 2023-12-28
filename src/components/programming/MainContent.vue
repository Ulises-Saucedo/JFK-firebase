<script setup>
    import SpecialtiesLayout from '../../layouts/SpecialtiesLayout.vue'
</script>

<template>
    <SpecialtiesLayout>
        <template v-slot:vision>
            <p class="mt-5">
                La tecnicatura en programación de nuestra escuela secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en el campo de la programación y la informática. A lo largo de los años de estudio, los estudiantes adquirirán habilidades prácticas y teóricas que les permitirán desarrollarse como profesionales en el mundo de la tecnología.            </p>
            <p class="mt-5">
                Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los fundamentos de la programación, incluyendo lenguajes de programación populares como C++, Java y Python. Los estudiantes aprenderán a escribir código eficiente y estructurado, comprenderán los conceptos de algoritmos y desarrollarán habilidades en el diseño y desarrollo de software.            </p>
            <p class="mt-5">
                Además de las habilidades técnicas, también se hará hincapié en el desarrollo de habilidades transversales como el pensamiento lógico, la resolución de problemas, la comunicación y el trabajo en equipo. Estas habilidades son fundamentales en el entorno laboral actual y prepararán a los estudiantes para enfrentar los desafíos del mundo real.
            </p>
        </template>
        <template v-slot:salida_laboral>
            <h2 class="text-xl font-medium my-5">Los egresados podran seguir las siguentes carreras:</h2>
            <RoughNotation :is-show="true" type="bracket" color="#FF0000" tag="ul">
                <li class="list-none">Ingeniería de Software</li>
                <li class="list-none">Ciencias de la Computación</li>
                <li class="list-none">Análisis de Datos</li>
                <li class="list-none">Desarrollador de Aplicaciones</li>
                <li class="list-none">Ingeniería en Sistemas</li>
            </RoughNotation>
            <h2 class="text-xl font-medium my-5">Universidades donde podes seguir estudiando:</h2>
            <RoughNotation :is-show="true" type="bracket" color="#FF0000" tag="ul">
                <li class="list-none">Universidad de Buenos Aires (UBA)</li>
                <li class="list-none">Universidad tecnológica Nacional (UTN)</li>
                <li class="list-none">Universidad Nacional de La Plata (UNLP)</li>
                <li class="list-none">Universidad Argentina de la Empresa (UADE)</li>
                <li class="list-none">Universidad de Palermo (UP)</li>
            </RoughNotation>
        </template>
        <template v-slot:practicas>
            <p class="mt-5">
                En nuestro programa educativo de séptimo año en nuestra escuela técnica secundaria, nos enorgullece brindar a nuestros estudiantes la oportunidad de participar en prácticas profesionales que los prepararán para el mundo laboral y les permitirán aplicar sus conocimientos en un entorno real.
            </p>
            <p class="mt-5">
                Durante el séptimo año, los estudiantes de nuestro programa de técnico en programación tendrán la valiosa oportunidad de trabajar directamente con empresas locales, donde podrán desarrollar aplicaciones y páginas web personalizadas para satisfacer las necesidades y requerimientos de dichas empresas.
            </p>
            <p class="mt-5">
                Nuestro objetivo principal es proporcionar una experiencia práctica y significativa a nuestros estudiantes, al tiempo que les permitimos adquirir habilidades técnicas y profesionales relevantes para el campo de la programación. Las prácticas profesionales les brindarán una perspectiva auténtica de cómo es trabajar en la industria tecnológica y les permitirán enfrentar desafíos reales mientras colaboran estrechamente con profesionales del sector.
            </p>
            <p class="mt-5">
                Durante el período de prácticas, los estudiantes trabajarán en equipos multidisciplinarios. Se les asignará proyectos específicos donde aplicarán sus habilidades de programación para crear aplicaciones o páginas web que cumplan con los objetivos y requisitos de las empresas asociadas.
            </p>
            <p class="mt-5">
                Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.
            </p>
        </template>
    </SpecialtiesLayout>
</template>