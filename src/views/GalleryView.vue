<script setup>
    import { onMounted, onUnmounted } from 'vue';
    import { images } from '../helpers/images.js'
    import HeaderLayout from '../layouts/HeaderLayout.vue'
    import PhotoSwipeLightbox from 'photoswipe/lightbox'
    import 'photoswipe/style.css'

    let lightbox = null;


    onMounted(() =>{
        if (!lightbox) {
            lightbox = new PhotoSwipeLightbox({
                gallery: '#' + "my-test-gallery",
                children: 'a',
                pswpModule: () => import('photoswipe'),
            })
            lightbox.init();
        }
    })

    onUnmounted(() =>{
        if (lightbox) {
            lightbox.destroy();
            lightbox = null;
        }
    })
</script>

<template>
    <HeaderLayout></HeaderLayout>
    <div id="my-test-gallery" class="flex flex-wrap p-5 justify-center mx-auto gap-5">
        <a
        v-for="(image, key) in images"
        :key="key"
        :href="image.largeURL"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer"
        >
            <img :src="image.thumbnailURL" :alt="image.alt" class="w-[350px] h-[250px] gap-5"/>
        </a>
    </div>
</template>