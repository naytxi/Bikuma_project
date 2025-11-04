<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue'
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;
</style>
