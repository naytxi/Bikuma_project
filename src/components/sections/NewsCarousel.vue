<template>
  <section class="news-carousel">
    <h2 class="news-carousel__title">Conoce las últimas novedades de Puntodis</h2>

    <div class="news-carousel__wrapper">
      <button class="arrow left" @click="prev" aria-label="Anterior">‹</button>

      <div 
        class="news-carousel__track" 
        :style="trackStyle"
        @touchstart="isMobile && handleTouchStart($event)"
        @touchend="isMobile && handleTouchEnd($event)"
      >
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCarousel } from '@/utils/useCarousel'
import NewsCard from '@/components/common/NewsCard.vue'

const newsItems = ref([
  { image: new URL('@/assets/image/news/noticia1.png', import.meta.url).href, tag: 'Señaletica', title: 'Manual de señalización accesible para un mundo más inclusivo' },
  { image: new URL('@/assets/image/news/noticia2.png', import.meta.url).href, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { image: new URL('@/assets/image/news/noticia3.jpg', import.meta.url).href, tag: 'Turismo', title: '¿Tienes cita en Fitur? La accesibilidad estará en tu agenda' },
  { image: new URL('@/assets/image/news/noticia4.png', import.meta.url).href, tag: 'Análisis', title: 'Piensa en más accesibilidad para personas con Asperger' },
  { image: new URL('@/assets/image/news/noticia5.jpg', import.meta.url).href, tag: 'Proyectos', title: 'Polideportivos con accesibilidad en Bilbao Kirolak' },
])

const visible = 3
const isMobile = ref(window.innerWidth <= 768)
const { currentIndex, next, prev } = useCarousel(newsItems, { autoPlay: false, loop: true, visibleItems: visible })

const handleResize = () => {
  const mobileNow = window.innerWidth <= 768
  if (mobileNow !== isMobile.value) {
    isMobile.value = mobileNow
    if (mobileNow) currentIndex.value = 0
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))

const trackStyle = computed(() => {
  if (isMobile.value) {
    const slideWidthPercent = 100
    const gapPercent = 5
    const totalSlideWidth = slideWidthPercent + gapPercent
    const offset = (100 - slideWidthPercent) / 2
    const translate = currentIndex.value * totalSlideWidth - offset
    return { transform: `translateX(-${translate}%)`, transition: 'transform 0.4s ease' }
  }
  const shiftPercent = ((currentIndex.value - 1) * 100) / visible
  return { transform: `translateX(-${shiftPercent}%)`, transition: 'transform 0.6s ease' }
})


const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 40

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  const distance = touchEndX.value - touchStartX.value
  if (Math.abs(distance) < minSwipeDistance) return
  if (distance > 0) prev()
  else next()
}
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
    font-size: 44.79px;
    font-weight: 700;
    color: $color-text-heading;
    margin-bottom: 100px;
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
      transform: scale(1.2);
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
    padding: 80px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 1.7rem;
      margin-bottom: 60px;
      text-align: center;
      line-height: 1.3;
    }

    &__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      overflow: hidden;
      position: relative;
    }

    &__track {
      display: flex;
      flex-direction: row;
      gap: 5%;
      transition: transform 0.4s ease;
    }

    &__slide {
      flex: 0 0 100%;
      opacity: 1;
      transform: scale(1);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
        z-index: 2;
      }

      &.active {
        transform: scale(1);
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
