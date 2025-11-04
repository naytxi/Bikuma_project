<template>
  <section class="hero">
    <div class="hero__content">
      <div class="hero__text">
        <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
        <p>
          Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas.
        </p>
        <BaseButton class="hero__button" variant="contactar" :showArrow="true">
          Contactar
        </BaseButton>
      </div>

      <div class="hero__image-wrapper">
        <UiBackgroundSquare class="hero__square" />
        <img
          src="@/assets/image/ilustracion.png"
          alt="Accesibilidad"
          class="hero__image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import UiBackgroundSquare from '@/components/ui/BackgroundSquare.vue'
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 120px;
  position: relative;
  overflow: hidden;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    position: relative;
  }

  &__text {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    z-index: 3;

    h1 {
      color: $color-text-heading;
      font-weight: 700;
      font-size: 2.3rem;
      line-height: 1.2;
    }

    p {
      font-family: 'Atkinson Hyperlegible', sans-serif;
      font-weight: 400;
      font-size: 21.6px;
      line-height: 140%;
      letter-spacing: 0;
      color: $color-text-body;
      max-width: 420px;
    }

    .hero__button {
      width: 263px;
      height: 54px;
      padding: 16px 24px;
      gap: 8px;
      border-radius: 33px;
    }
  }

  &__image-wrapper {
    position: relative;
    flex-shrink: 0;
    width: 800px;
     height: 600px; 
    margin-left: 10px;
    overflow: visible;
  }

  &__image {
    position: relative;
    width: 705px;
    height: auto;
    object-fit: contain;
    border-radius: 24px;
    z-index: 2;
    left: 5px;
    top: -10px;
  }

  &__square {
    position: absolute;
    width: 760px;
    height: 500px; ;
    top: 10px;
    left: 180px;
    z-index: 1;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .hero {
    padding: 80px 60px;

    &__content {
      gap: 40px;
    }

    &__text {
      width: 380px;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 18px;
      }

      .hero__button {
        width: 230px;
        height: 50px;
      }
    }

    &__image-wrapper {
      width: 500px;
      height: 420px;
      margin-left: 20px;
    }

    &__image {
      width: 440px;
      left: 10px;
    }

    &__square {
      width: 520px;
      height: 400px;
      top: 30px;
      left: 80px;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 20px;

    &__content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px;
    }

    &__text {
      width: 100%;
      align-items: center;
      gap: 24px;

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 16px;
        max-width: 90%;
      }

      .hero__button {
        width: 200px;
        height: 48px;
      }
    }

    &__image-wrapper {
      width: 100%;
      max-width: 380px;
      height: auto;
      margin: 0 auto;
    }

    &__image {
      position: relative;
      width: 100%;
      height: auto;
      top: 0;
      left: 0;
    }

    &__square {
      display: none;
    }
  }
}
</style>
