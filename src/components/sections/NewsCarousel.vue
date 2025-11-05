<template>
  <section class="news-carousel">
    <h2 class="news-carousel__title">Conoce las últimas novedades de Puntodis</h2>

    <div class="news-carousel__wrapper" :style="{'--visible': visible}">
      <button class="arrow left" @click="prev" aria-label="Anterior">‹</button>

      <div class="news-carousel__track" :style="trackStyle">
        <div
          v-for="(news, index) in newsItems"
          :key="index"
          class="news-carousel__slide"
          :class="{ active: index === currentIndex }"
        >
          <NewsCard :image="news.image" :tag="news.tag" :title="news.title" />
        </div>
      </div>

      <button class="arrow right" @click="next" aria-label="Siguiente">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCarousel } from '@/utils/useCarousel'
import NewsCard from '@/components/common/NewsCard.vue'

const newsItems = ref([
  { image: new URL('@/assets/image/noticia1.png', import.meta.url).href, tag: 'Señaletica', title: 'Manual de señalización accesible para un mundo más inclusivo' },
  { image: new URL('@/assets/image/noticia2.png', import.meta.url).href, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { image: new URL('@/assets/image/noticia3.jpg', import.meta.url).href, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { image: new URL('@/assets/image/noticia4.png', import.meta.url).href, tag: 'Análisis', title: 'Piensa en más accesibilidad para personas con Asperger' },
  { image: new URL('@/assets/image/noticia5.jpg', import.meta.url).href, tag: 'Proyectos', title: 'Polideportivos con accesibilidad en Bilbao Kirolak' },
])

const visible = 3

const { currentIndex, next, prev } = useCarousel(newsItems, {
  autoPlay: false,
  loop: true,
  visibleItems: visible
})

const trackStyle = computed(() => {
  const centerOffset = Math.floor(visible / 2)
 const shiftPercent = ((currentIndex.value - 1) * 100) / visible

  return {
    transform: `translateX(-${shiftPercent}%)`
  }
})
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.news-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  position: relative;

  &__title {
    font-size: 2rem;
    font-weight: 700;
    color: $color-text-heading;
    margin-bottom: 120px;
  }

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px;
    overflow: visible;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__track {
    display: flex;
    transition: transform 0.6s ease;
    will-change: transform;
  }

&__slide {
  flex: 0 0 calc(33.55% - 0.2rem); 
  display: flex;
  justify-content: center;
  padding: 0 0.1rem; 
  opacity: 0.6;
  transform: scale(0.9);
  transition: transform 0.5s ease, opacity 0.5s ease;
  z-index: 1;

  &.active {
    transform: scale(1.1);
    opacity: 1;
    z-index: 3;
  }
}

  .arrow {
    background: $color-white;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    border-radius: 50%;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.32);
    transition: background 0.3s ease, color 0.3s ease;
    z-index: 10;

    &:hover {
      background: $color-secondary;
      color: $color-white;
    }

    &.left {
      position: absolute;
      left: 320px;
    }

    &.right {
      position: absolute;
      right: 320px;
    }
  }
}
@media (max-width: 768px) {

  .news-carousel {
    padding: 50px 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 1.7rem;
      margin-bottom: 50px;
      text-align: center;
      line-height: 1.3;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      overflow: visible;
      position: relative;
      gap: 30px;
    }

    &__track {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      justify-content: center;
      transition: none;
    }

    &__slide {
      width: 92%;
      opacity: 1; 
      transform: scale(1);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        z-index: 2;
      }
    }

    .arrow {
      display: none;
    }
  }

  .news-card {
    width: 280px;
    height: 320px;
    border-radius: 22px;
    transition: transform 0.3s ease;
  }
}


</style>
