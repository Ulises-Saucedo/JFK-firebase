<script setup>
    const cardItems = [
        {
            title: "Entérese de las últimas noticias.",
            list: [
                "Informese de las novedades de la escuela",
                "Conecte con la comunidad escolar.",
                "Aprenda sobre temas relevantes.",
                "Participe en la vida escolar"
            ],
            button: "Ir a últimas noticias.",
            url: "/forum"
        },
        {
            title: "¿Está pensando inscribirse?",
            list: [
                "Prepárese para el futuro.",
                "Desarrolle su potencial.",
                "Conecte con otros.",
                "Ambiente positivo y acogedor.",
            ],
            button: "Realice la preinscripción.",
            url: "/inscription"
        }
    ]
</script>

<template>
    <section class="w-full block justify-center mt-12 md:flex mb-32">
        <div class="card w-[80%] md:w-[40%] shadow m-8 min-h-[350px] mx-auto md:mx-5" v-for="item in cardItems" :key="item.title">
            <div class="card-body flex flex-col justify-between">
                <h2 class="card-title text-center text-3xl">{{ item.title }}</h2>
                <div>
                    <li class="list-none mt-[15px]" v-for="(listItem, i) of item.list" :key="i">✅ {{ listItem }}</li>
                </div>
                <div class="card-actions justify-center">
                    <router-link :to="item.url" class="btn bg-blue-500 w-full">{{ item.button }}</router-link>
                </div>
            </div>
        </div>
    </section>
</template>