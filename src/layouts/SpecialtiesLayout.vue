<template>
    <ul class="menu menu-horizontal w-full p-0 bg-[#F8F7F3] border-b-[1px] border-neutral-200">
        <li class="w-1/3"><a href="#vision" class="rounded-none text-center flex">Visión general</a></li>
        <li class="w-1/3"><a href="#campo" class="rounded-none text-center flex">Campo laboral</a></li>
        <li class="w-1/3"><a href="#practicas" class="rounded-none text-center flex">Prácticas</a></li>
    </ul>
    <section class="max-w-[900px] flex flex-col justify-center my-16 mx-auto p-5" id="vision">
        <RoughNotation :is-show="true" type="highlight" color="#FFD54F" tag="h1" class="text-center text-4xl font-bold">
            VISION GENERAL
        </RoughNotation>
        <slot name="vision"></slot>
    </section>
    <section class="max-w-[900px] flex flex-col justify-center my-16 mx-auto p-5" id="campo">
        <RoughNotation :is-show="true" type="highlight" color="#FFD54F" tag="h1" class="text-center text-4xl font-bold">
            SALIDA LABORAL
        </RoughNotation>
        <slot name="salida_laboral"></slot>
    </section>
    <section class="max-w-[900px] flex flex-col justify-center my-16 mx-auto p-5" id="practicas">
        <RoughNotation :is-show="true" type="highlight" color="#FFD54F" tag="h1" class="text-center text-4xl font-bold">
            PRACTICAS PROFESIONALIZANTES
        </RoughNotation>
        <slot name="practicas"></slot>
    </section>
</template>