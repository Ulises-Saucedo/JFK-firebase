<template>
    <section class="my-24 flex justify-center flex-col max-w-[900px] mx-auto">
        <h1 class="text-center text-4xl font-bold">
            <RoughNotation type="highlight" :is-show="true" color="#FFD54F">
                Inscripción de ingresantes 2024
            </RoughNotation>
        </h1>
        <div class="mx-auto">
            <p class="mt-6 text-base">
                Sres padres: Haremos un primer acercamiento para quienes deseen inscribirse a 1° año en el ciclo lectivo 2023. <span class="font-bold">Del 24 al 28 de Octubre de 2022 de 09 a 11 hs y de 14 a 16 hs.</span>
            </p>
            <p class="mt-6 text-base">
                Se deberá presentar fotocopia del DNI del alumno y certificado de alumno regular de la escuela a la cual asiste. Además se tomaran datos e información particular de contacto para conformar un registro. Una vez realizado este primer contacto de forma personal su hijo/a quedara registrado como solicitante de una vacante para cursar el año en el ciclo lectivo 2023.
            </p>
            <p class="mt-6 text-base">
                <span class="font-bold">ACLARACION IMPORTANTE: La conformación del registro de contacto no implica reserva de vacante y/o turno</span>
                <br>
                La inscripción definitiva se realizará a partir del momento en que el alumno haya promovido el año en curso y de acuerdo al siguiente cronograma:
            </p>
            <p class="mt-6 text-base">
                <RoughNotation type="bracket" :is-show="true" color="#FF0000">
                    A partir del 13/12: los Sres. Padres deberán descargar de www.eest5lanus.edu.ar sección “INCRIPCION”, botón “DOCUMENTACION INSCRIPCION” los formularios y autorizaciones que deberán completar y firmar. Para ser presentados en la inscripción definitiva.
                </RoughNotation>
            </p>
            <p class="mt-6 text-base">
                <RoughNotation type="bracket" :is-show="true" color="#FF0000">
                    19/12 al 21/12:Inscripción definitiva, para lo cual los Sres. Padres deberán concurrir con la documentación descargada completa y firmada. Agregando la siguiente documentación: fotocopia de la partida de nacimiento, fotocopia de DNI (2 juegos), fotocopia DNI padres o tutor responsable, fotocopia del plan de vacunación y constancia de aprobación del año en curso.
                </RoughNotation>
            </p>
            <p class="mt-6 text-base">
                La misma se reanudará a partir del día 15 de febrero de 2023 en el mismo horario. Informamos que la Dirección del Establecimiento decidirá la asignación de los turnos de acuerdo a las vacantes disponibles y a la prioridad de la inscripción definitiva. Los alumnos ingresantes a 1º año del ciclo básico deberán adquirir en la librería del establecimiento el cuadernillo de actividades de nivelación de Prácticas del Lenguaje y Matemática, que deberá estar cumplimentado al iniciar el ciclo lectivo. ¡Gracias por elegir nuestra escuela!
            </p>
            <a href="./src/assets/DOCUMENTACION_INSCRIPCION.pdf" class="mt-6 btn bg-blue-500 w-full" target="_blank">
                DOCUMENTAR INSCRIPCION
            </a>
        </div>
    </section>
</template>