<template>
  <div id="app" class="app">
    <Navbar />
    <HeroSection />
    <CTASection />
    <NewsSection />
    <ServiceSection />
    <AboutSection />
    <ProductsSection />
    <ProjectsSection />
    <SponsorsSection />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import NewsSection from '@/components/sections/NewsCarousel.vue'
import ServiceSection from '@/components/sections/ServiceSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProductsSection from '@/components/sections/ProductsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SponsorsSection from '@/components/sections/SponsorsSection.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style lang="scss">
@use "@/assets/styles/variables" as *;

.app {
  background-color: $color-background;
  min-height: 100vh;
}
</style>
