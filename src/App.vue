<template>
    <app-provider>
        <router-view />
    </app-provider>
</template>


<script setup lang="ts">
import AppProvider from '@/components/Provider.vue';
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
