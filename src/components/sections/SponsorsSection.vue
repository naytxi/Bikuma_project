<template>
  <section class="sponsors">
    <div class="sponsors__logos">
      <img 
        v-for="(logo, index) in logos" 
        :key="index" 
        :src="logo" 
        alt="Logo patrocinador" 
        class="sponsors__logo"
      />
    </div>
  </section>
</template>

<script setup>
const logos = [
  new URL('@/assets/image/sponsor1.png', import.meta.url).href,
  new URL('@/assets/image/sponsor2.png', import.meta.url).href,
  new URL('@/assets/image/sponsor3.png', import.meta.url).href,
  new URL('@/assets/image/sponsor4.png', import.meta.url).href,
  new URL('@/assets/image/sponsor5.png', import.meta.url).href,
]
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.sponsors {
  width: 100%;
  background-color: $color-white;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none; 

  &__logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: nowrap;
    max-width: 1200px;
    width: 100%;
  }

  &__logo {
    height: 60px;
    object-fit: contain;
    opacity: 0.9;
    pointer-events: none; 
  }
}

@media (max-width: 768px) {
  .sponsors {
    padding: 40px 20px;

    &__logos {
      flex-direction: column;
      gap: 30px;
    }

    &__logo {
      height: 50px;
    }
  }
}
</style>
