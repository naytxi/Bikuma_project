<template>
  <header class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo">
        <img src="@/assets/image/navbar/logotipoo.png" alt="Logo" />
      </div>

      <nav class="navbar__links">
        <a href="#services" @click.prevent="scrollTo('services')">Servicios</a>
        <a href="#products" @click.prevent="scrollTo('products')">Productos</a>
        <a href="#cta" @click.prevent="scrollTo('cta')">Administración Pública</a>
        <a href="#about" @click.prevent="scrollTo('about')">Conócenos</a>
        <a href="#news" @click.prevent="scrollTo('news')">Actualidad</a>
      </nav>

      <div class="navbar__actions">
        <BaseButton variant="contactar" @click="scrollTo('newsletter')" :showArrow="false">Contactar</BaseButton>
        <BaseTiendaButton>Tienda</BaseTiendaButton>
        <button class="btn btn--search">
          <Icon icon="mdi:magnify" />
        </button>

        <button class="navbar__toggle" @click="toggleMenu">
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
          <span :class="{ open: isOpen }"></span>
        </button>
      </div>
    </div>

    <transition name="slide">
      <div v-if="isOpen" class="navbar__mobile">
        <a href="#services" @click="scrollTo('services'); closeMenu()">Servicios</a>
        <a href="#products" @click="scrollTo('products'); closeMenu()">Productos</a>
        <a href="#cta" @click="scrollTo('cta'); closeMenu()">Administración Pública</a>
        <a href="#about" @click="scrollTo('about'); closeMenu()">Conócenos</a>
        <a href="#news" @click="scrollTo('news'); closeMenu()">Actualidad</a>

        <div class="navbar__mobile-actions">
          <BaseButton variant="contactar" @click="scrollTo('newsletter'); closeMenu()">Contactar</BaseButton>
          <BaseTiendaButton @click="closeMenu()">Tienda</BaseTiendaButton>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseTiendaButton from '@/components/ui/BaseShopButton.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth > 768 && isOpen.value) {
    isOpen.value = false
  }
}

const scrollTo = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

.navbar {
  width: 100%;
  background-color: $color-background;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 0.2rem 0.8rem rgba($color-black, 0.05);

  &__container {
    width: 1440px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 43px 155px;
    gap: 15px;
    position: relative;
  }

  &__logo img {
    width: 223px;
    height: 66px;
    object-fit: contain;
  }

  &__links {
    display: flex;
    gap: 20px;

    a {
      color: $color-text-heading;
      font-weight: 600;
      text-decoration: none;
      position: relative;
      padding-bottom: 4px;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $color-secondary;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 15px;

    .btn {
      &--search {
        background: none;
        border: none;
        color: $color-black;
        cursor: pointer;

        svg {
          font-size: 1.4rem;
          color: $color-black;
        }
      }
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    background: none;
    border: none;
    cursor: pointer;
    gap: 4px;

    span {
      width: 100%;
      height: 3px;
      background-color: $color-black;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    span.open:nth-child(1) {
      transform: translateY(6px) rotate(45deg);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: translateY(-6px) rotate(-45deg);
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: $color-background;
    padding: 1.2rem;
    box-shadow: 0 4px 12px rgba($color-black, 0.1);
    border: 1px solid color.adjust($color-background, $lightness: 10%);
    border-radius: 10px;
    width: 250px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    z-index: 999;

    a {
      font-weight: 600;
      color: $color-text-heading;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: $color-secondary;
      }
    }

    &-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1rem;
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    &__container {
      width: 100%;
      padding: 1rem 1.5rem;
      justify-content: space-between;
      align-items: center;
      position: sticky;
    }

    &__logo {
      display: none;
    }

    &__links {
      display: none;
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-direction: row;

      .base-tienda-button,
      .base-button {
        display: none;
      }

      .btn--search {
        display: block;
        order: 2;
      }

      .navbar__toggle {
        display: flex;
        order: 1;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
