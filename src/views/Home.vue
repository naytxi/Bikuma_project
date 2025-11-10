<template>
  <div id="app" class="app">
    <Navbar />

    <section id="hero">
      <HeroSection />
    </section>

    <section id="cta">
      <CTASection />
    </section>

    <section id="news">
      <NewsSection />
    </section>

    <section id="services">
      <ServiceSection />
    </section>

    <section id="about">
      <AboutSection />
    </section>

    <section id="products">
      <ProductsSection />
    </section>

    <section id="projects">
      <ProjectsSection />
    </section>

    <section id="sponsors">
      <SponsorsSection />
    </section>

    <footer id="newsletter">
      <Footer />
    </footer>
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
