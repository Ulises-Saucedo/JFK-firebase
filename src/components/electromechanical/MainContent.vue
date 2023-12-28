<script setup>
    import SpecialtiesLayout from '../../layouts/SpecialtiesLayout.vue'
</script>

<template>
    <SpecialtiesLayout>
        <template v-slot:vision>
            <p class="mt-5">
                La tecnicatura en electromecánica de nuestra escuela técnica secundaria es un programa educativo diseñado para brindar a los estudiantes una sólida formación en los campos de la electricidad, la electrónica y la mecánica. Durante su formación, los estudiantes adquirirán conocimientos teóricos y habilidades prácticas que les permitirán desarrollarse como profesionales en el ámbito de la electromecánica.
            </p>
            <p class="mt-5">
                Nuestro plan de estudios se centra en proporcionar a los estudiantes una base sólida en los principios fundamentales de la electricidad y la electrónica. Aprenderán sobre circuitos eléctricos, sistemas de control, electrónica analógica y digital, así como sobre los componentes y dispositivos utilizados en sistemas electromecánicos.
            </p>
            <p class="mt-5">
                Además de los aspectos eléctricos y electrónicos, nuestros estudiantes también se familiarizarán con los conceptos y las técnicas de la mecánica. Aprenderán sobre máquinas y sistemas mecánicos, elementos de transmisión de movimiento, mantenimiento preventivo y correctivo, y técnicas de medición y control.
            </p>
        </template>
        <template v-slot:salida_laboral>
            <h2 class="text-xl font-medium my-5">Los egresados podran desempeñarse en las siguientes áreas:</h2>
            <RoughNotation :is-show="true" type="bracket" color="#FF0000" tag="ul">
                <li class="list-none">Ingeniería en Electromecánica</li>
                <li class="list-none">Ingeniería en Electromecánica</li>
                <li class="list-none">Automatización y Control Industrial</li>
                <li class="list-none">Automatización y Control Industrial</li>
                <li class="list-none">Ingeniería en Electrónica</li>
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
                En el marco de nuestro programa educativo para el séptimo año en nuestra escuela técnica secundaria, nos complace destacar la excelencia de la formación que ofrecemos en el campo de la electromecánica. Este programa está diseñado para brindar a nuestros estudiantes una experiencia educativa integral que los prepare para enfrentar los retos del mundo laboral en el ámbito electromecánico.
            </p>
            <p class="mt-5">
                Durante el séptimo año, los estudiantes de nuestro programa de técnico en electromecánica tendrán la emocionante oportunidad de aplicar sus conocimientos en entornos prácticos y reales. Colaborarán estrechamente con empresas locales especializadas en electromecánica, participando en proyectos concretos que les permitirán desarrollar habilidades esenciales para este campo en constante evolución.
            </p>
            <p class="mt-5">
                El objetivo principal de nuestro programa es proporcionar a los estudiantes una sólida formación técnica, al tiempo que fomentamos la aplicación práctica de sus conocimientos en el área de la electromecánica. Durante sus prácticas profesionales, los estudiantes se sumergirán en proyectos específicos, donde podrán aplicar sus habilidades para diseñar, mantener y reparar sistemas electromecánicos.
            </p>
            <p class="mt-5">
                La formación en electromecánica no solo se centra en la adquisición de habilidades técnicas avanzadas, sino también en el desarrollo de competencias clave, como el trabajo en equipo, la comunicación efectiva y la gestión de proyectos. Los estudiantes trabajarán en equipos multidisciplinarios, colaborando con profesionales del sector para abordar desafíos reales y encontrar soluciones innovadoras.
            </p>
            <p class="mt-5">
                A lo largo de este proceso, los estudiantes recibirán orientación especializada y retroalimentación constante para perfeccionar sus habilidades técnicas y fortalecer su capacidad para enfrentar problemas complejos en el campo electromecánico. Nuestro compromiso es brindar a nuestros estudiantes una experiencia educativa enriquecedora que los prepare no solo como técnicos competentes, sino también como profesionales capacitados para liderar en el apasionante mundo de la electromecánica.
            </p>
            <p class="mt-5">
                Además de desarrollar aplicaciones y páginas web, los estudiantes también adquirirán habilidades de comunicación, trabajo en equipo y gestión de proyectos a medida que interactúan con los clientes y colaboran con otros profesionales. A lo largo del proceso, recibirán orientación y retroalimentación constante para mejorar sus habilidades técnicas y su capacidad para resolver problemas.
            </p>
        </template>
    </SpecialtiesLayout>
</template>