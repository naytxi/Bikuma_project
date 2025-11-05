<template>
  <div id="app" class="app">
    <Navbar />
    <HeroSection />
    <CTASection />
    <NewsSection />
    <ServiceSection />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import NewsSection from '@/components/sections/NewsCarousel.vue'
import ServiceSection from '@/components/sections/ServiceSection.vue'
</script>

<style lang="scss">
@use "@/assets/styles/variables" as *;

.app {
  background-color: $color-background;
  min-height: 100vh;
}
</style>
