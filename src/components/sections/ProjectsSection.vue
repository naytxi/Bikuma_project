<template>
  <section class="projects-carousel">
    <h2 class="projects-carousel__title">Proyectos de accesibilidad universal</h2>

        <div v-if="isMobile" class="swipe-indicator">
      <span class="swipe-arrow">⇠⇢</span>
    </div>

    <div class="projects-carousel__wrapper">
      <button class="arrow left" @click="prev" aria-label="Anterior">‹</button>

      <div 
        class="projects-carousel__track" 
        :style="trackStyle"
        @touchstart="isMobile && handleTouchStart($event)"
        @touchend="isMobile && handleTouchEnd($event)"
      >
        <div
          v-for="(project, index) in projectItems"
          :key="index"
          class="projects-carousel__slide"
          :class="{ active: index === currentIndex }"
        >
          <ProjectCard 
            :image="project.image" 
            :title="project.title" 
            :location="project.location" 
          />
        </div>
      </div>

      <button class="arrow right" @click="next" aria-label="Siguiente">›</button>
    </div>


  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCarousel } from '@/utils/useCarousel'
import ProjectCard from '@/components/common/ProjectCard.vue'

const projectItems = ref([
  { image: new URL('@/assets/image/projects/proyecto1.png', import.meta.url).href, title: 'Manual de señalización accesible para un mundo más inclusivo', location: 'Bilbao' },
  { image: new URL('@/assets/image/projects/proyecto2.jpg', import.meta.url).href, title: 'La estrategia integral para el fomento de la accesibilidad en bilbobus', location: 'Bilbao' },
  { image: new URL('@/assets/image/projects/proyecto3.jpg', import.meta.url).href, title: 'Alhóndiga bilbao – centro azkuna, pensando en la accesibilidad para todos', location: 'Bilbao' },
  { image: new URL('@/assets/image/projects/proyecto4.jpg', import.meta.url).href, title: 'Vilamuseu «museos para todos»', location: 'Vila Joiosa' },
  { image: new URL('@/assets/image/projects/proyecto5.jpg', import.meta.url).href, title: 'La accesibilidad en el turismo entra ya al siguiente nivel', location: 'Getxo' },
])

const visible = 3
const isMobile = ref(window.innerWidth <= 768)
const { currentIndex, next, prev } = useCarousel(projectItems, { autoPlay: false, loop: true, visibleItems: visible })

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

.projects-carousel {
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
  .projects-carousel {
    padding: 70px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__title {
      font-size: 1.8rem;
      margin-bottom: 30px;
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

    .swipe-indicator {
      margin-top: 20px;
      font-size: 2.5rem;
      color: rgba($color-text-heading, 0.6);
      animation: swipeHint 1.6s ease-in-out infinite;
      user-select: none;
    }

    @keyframes swipeHint {
      0% { transform: translateX(0); opacity: 0.6; }
      50% { transform: translateX(-15px); opacity: 1; }
      100% { transform: translateX(0); opacity: 0.6; }
    }
  }

  .project-card {
    width: 280px;
    height: 320px;
    border-radius: 22px;
    transition: transform 0.3s ease;
  }
}
</style>
