<script setup>
    import HeaderLayout from '../layouts/HeaderLayout.vue';
</script>

<template>
    <HeaderLayout>
        <template v-slot:searchbar>
            <div class="navbar-end">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
        </template>
    </HeaderLayout>
    <h1>FORO</h1>
</template>

<style scoped>

</style>