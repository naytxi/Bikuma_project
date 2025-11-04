<template>
  <div id="app" class="app">
    <Navbar />
    <HeroSection />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
</script>

<style lang="scss">
@use "@/assets/styles/variables" as *;

.app {
  background-color: $color-background;
  min-height: 100vh;
}
</style>
