<template>
  <section class="about">
    <div class="about__content">
      <div class="about__image-wrapper">
        <UiBackgroundSquare class="about__square" />
        <img
          src="@/assets/image/ilustracion2.png"
          alt="Quienes somos"
          class="about__image"
        />
      </div>

      <div class="about__text">
        <h3>Somos consultores en Accesibilidad Universal</h3>
        <p>
          Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad.

Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.
        </p>
        <BaseButton class="about__button" variant="contactar" :showArrow="true">
          Contacta con nosotros
        </BaseButton>
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

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 130px 180px;
  position: relative;
  overflow: hidden;

  &__content {
    display: flex;
    align-items: flex-start; 
    justify-content: flex-start;
    width: 100%;
    max-width: 1440px;
    position: relative;
    gap: 10px; 
  }

  &__image-wrapper {
    position: relative;
    flex-shrink: 0;
    width: 600px; 
    height: 500px;
    overflow: visible;
  }

  &__square {
    position: absolute;
    width: 1140px; 
    height: 450px;
    top: 0;
    left: 20px;
    z-index: 1;
  }

  &__image {
    position: absolute;
    bottom: 0;  
    left: -100px; 
    width: 730px;
    height: auto;
    object-fit: contain;
    border-radius: 24px;
    z-index: 2;
  }

  &__text {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    z-index: 3;
    color: $color-white;
     margin-top: 15px; 

    h3 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: $color-white;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.5;
    }

    .about__button {
      width: 250px;
      height: 50px;
    }
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .about {
    padding: 60px 40px;

    &__content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 40px; 
      position: relative;
    }

    &__image-wrapper {
      width: 500px;
      height: 400px;
      position: relative;
    }

    &__image {
      width: 440px;
      left: -20px; 
      top: -10px;
      position: relative;
    }

    &__square {
      width: 100%; 
      max-width: 1024px;
      height: 400px;
      top: 0;
      left: 0;
    }

    &__text {
      width: 100%;
      max-width: 350px;
      gap: 16px;
      margin-top: 0; 
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      .about__button {
        width: 220px;
        height: 48px;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    padding: 30px 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &__content {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      gap: 20px;
      position: relative;
    }

    &__image-wrapper {
      width: 100%;
      max-width: 350px;
      height: auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;

      .about__square {
        position: absolute;
        width: 100%;
        height: 250%;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .about__image {
        position: relative;
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-left: 200px;
        border-radius: 16px;
        z-index: 2;
      }
    }

    &__text {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      z-index: 3;
      color: $color-white;
      margin-bottom: 20px;

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.4;
        padding: 0 10px;
      }

      .about__button {
        width: 200px;
        height: 48px;
      }
    }
  }
}

</style>
