<script setup>
    
</script>

<template>
    <footer class="footer footer-center sm:flex sm:justify-around p-10 bg-[#F8F7F3] text-base-content border-t-[1px] border-neutral-200">
        <nav>
            <header class="footer-title">Redes sociales</header> 
            <a class="link link-hover" href="https://www.facebook.com/profile.php?id=100000755543895" target="_blank">Facebook</a>
            <a class="link link-hover" href="https://www.instagram.com/escuelatecnica5lanus/?next=%2F" target="_blank">Instagram</a>
            <a class="link link-hover" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBzDMLffdnFrgKFlGmqBpmkfHbDkljwwWdmxXZnVbXXJRNLxTzbDCktZJPdmXlwMdFXWxH" target="_blank">E-mail</a>
        </nav> 
        <nav>
            <header class="footer-title">Qué estudiar</header>
            <router-link to="/programming" class="link link-hover" target="_blank">Programación</router-link> 
            <router-link to="/computing" class="link link-hover" target="_blank">Informática</router-link>
            <router-link to="/electromechanical" class="link link-hover" target="_blank">Electromecánica</router-link>  
        </nav> 
        <nav>
            <header class="footer-title">Contacto</header> 
            <a class="link link-hover">(+54) 9 11 4241-8547</a>
            <a class="link link-hover">4240-5026</a>
        </nav>
    </footer>
    <footer class="footer px-10 py-4 border-t-[1px] border-neutral-200 bg-[#F8F7F3] text-base-content flex justify-center">
        <nav class="md:place-self-center md:justify-self-end">
            <div class="grid grid-flow-col gap-4">
                <img src="../assets/logo.svg" alt="Logo de la escuela JFK" class="w-1/12 mx-auto">
            </div>
        </nav>
    </footer>
</template>