<script setup>
    import SpecialtiesLayout from '../../layouts/SpecialtiesLayout.vue'
</script>

<template>
    <SpecialtiesLayout>
        <template v-slot:vision>
            <p class="mt-5">
                La tecnicatura en informática de nuestra escuela secundaria es un programa educativo diseñado para proporcionar a los estudiantes una formación integral en el campo de la informática y la tecnología. Durante los años de estudio, los estudiantes adquirirán conocimientos teóricos y prácticos que les permitirán desarrollar una sólida base en diversas áreas de la informática.
            </p>
            <p class="mt-5">
                Nuestro plan de estudios abarca una amplia gama de temas, incluyendo programación, bases de datos, redes, hardware, sistemas operativos, seguridad informática y diseño de sistemas. Los estudiantes aprenderán lenguajes de programación como Java, C#, Python y HTML/CSS, y desarrollarán habilidades en la configuración, instalación, mantenimiento y solución de problemas en redes informáticas y sistemas computacionales
            </p>
            <p class="mt-5">
                A lo largo del programa, los estudiantes tendrán la oportunidad de aplicar sus conocimientos en proyectos prácticos. Trabajarán en equipos para diseñar e implementar soluciones informáticas que aborden problemas reales y cumplan con los requisitos de los usuarios. Estos proyectos les permitirán desarrollar habilidades en el análisis de problemas, la toma de decisiones y la resolución de desafíos técnicos
            </p>
        </template>
        <template v-slot:salida_laboral>
            <h2 class="text-xl font-medium my-5">Los egresados podran seguir las siguentes carreras:</h2>
            <RoughNotation :is-show="true" type="bracket" color="#FF0000" tag="ul">
                <li class="list-none">Ingeniería de informática</li>
                <li class="list-none">Administración de Sistemas Informáticos</li>
                <li class="list-none">Redes y comunicaciones</li>
                <li class="list-none">Desarrollador de Aplicaciones</li>
                <li class="list-none">Ingeniería Robotica</li>
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
                En el marco de nuestro programa educativo para el séptimo año en nuestra escuela técnica secundaria, nos enorgullece resaltar la calidad de la formación que ofrecemos en el campo de la informática. Nuestro programa de técnico en informática está diseñado para brindar a los estudiantes una experiencia educativa completa que los equipará con las habilidades y conocimientos necesarios para destacar en el dinámico mundo de la tecnología de la información.
            </p>
            <p class="mt-5">
                Durante el séptimo año, los estudiantes de nuestro programa de informática tendrán la emocionante oportunidad de aplicar sus conocimientos en entornos prácticos y reales. Colaborarán estrechamente con empresas locales especializadas en tecnología, participando en proyectos concretos que les permitirán desarrollar habilidades esenciales para este campo en constante evolución.
            </p>
            <p class="mt-5">
                El objetivo principal de nuestro programa es proporcionar a los estudiantes una sólida formación técnica en informática, al tiempo que fomentamos la aplicación práctica de sus conocimientos. Durante sus prácticas profesionales, los estudiantes se sumergirán en proyectos específicos, donde podrán aplicar sus habilidades para desarrollar software, gestionar redes, y resolver problemas informáticos complejos.
            </p>
            <p class="mt-5">
                La formación en informática no solo se centra en la adquisición de habilidades técnicas avanzadas, sino también en el desarrollo de competencias clave, como el trabajo en equipo, la comunicación efectiva y la gestión de proyectos. Los estudiantes trabajarán en equipos multidisciplinarios, colaborando con profesionales del sector para abordar desafíos reales y encontrar soluciones innovadoras.
            </p>
            <p class="mt-5">
                A lo largo de este proceso, los estudiantes recibirán orientación especializada y retroalimentación constante para perfeccionar sus habilidades técnicas y fortalecer su capacidad para adaptarse a las rápidas transformaciones en el campo de la informática. Nuestro compromiso es brindar a nuestros estudiantes una experiencia educativa enriquecedora que los prepare no solo como expertos técnicos, sino también como profesionales capacitados para liderar en el fascinante mundo de la informática.
            </p>
        </template>
    </SpecialtiesLayout>
</template>