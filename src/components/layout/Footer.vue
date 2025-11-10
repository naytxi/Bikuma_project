<template>
  <footer class="footer">
    <div class="footer__container">

      <div class="footer__left">
        <img src="@/assets/image/footer/logo.png" alt="Puntodis" class="footer__logo" />
        <p class="footer__text">
          Actualiza con nosotros tu proyecto con accesibilidad en la información
          y lleva tu mensaje a todas las personas.
        </p>
        <BaseButton variant="contactar">Contactar</BaseButton>

        <div class="footer__partners">
          <img src="@/assets/image/footer/sponsor.png" alt="Partner 1" />
        </div>
      </div>

      <nav class="footer__nav">
        <a href="#services">Servicios</a>
        <a href="#products">Productos</a>
        <a href="#cta">Administración Pública</a>
        <a href="#about">Conócenos</a>
        <a href="#news">Actualidad</a>
        <a href="#">Tienda</a>
      </nav>

      <div class="footer__newsletter">
        <h5>¿Quieres estar al día con las noticias de accesibilidad?</h5>
        <p>Suscríbete a la newsletter</p>

        <form class="newsletter__form" @submit.prevent>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />

          <div class="newsletter__privacy">
            <input type="checkbox" id="privacy" />
            <label for="privacy">Acepto la política de privacidad</label>
          </div>

          <BaseButton variant="contactar" showArrow>SUSCRIBIRSE</BaseButton>
        </form>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__legal">
        <span>© 2024 Puntodis</span>
        <a href="#">Política de privacidad</a>
        <a href="#">Aviso legal</a>
        <a href="#">Política de cookies</a>
      </div>

      <div class="footer__social">
        <Icon icon="mdi:twitter" />
        <Icon icon="mdi:facebook" />
        <Icon icon="mdi:instagram" />
        <Icon icon="mdi:linkedin" />
        <Icon icon="mdi:youtube" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

.footer {
  background-color: $color-primary;
  color: $color-white;
  padding: 80px 0 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 155px;
  }

  &__left {
    flex: 1;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .footer__text {
      font-size: 1rem;
      line-height: 1.6;
      color: $color-white;
      max-width: 320px;
    }

    .footer__logo {
      width: 220px;
      height: auto;
      object-fit: contain;
      filter: brightness(0) invert(1);
    }

    .footer__partners {
      display: flex;
      align-items: center;
      margin-top: 10px;
      margin-left: 30px;

      img {
        height: 80px;
        width: auto;
        object-fit: contain;
        opacity: 0.9;
        filter: brightness(0) invert(1);
      }
    }
  }

  &__nav {
    flex: 0.8;
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 180px;
    margin-top: 50px;

    a {
      color: $color-white;
      font-weight: 600;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: $color-primary-light;
      }
    }
  }

  &__newsletter {
    flex: 1.2;
    background-color: $color-primary-dark;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 300px;
    max-width: 420px;

    h5 {
      font-size: 1.1rem;
      font-weight: 700;
      color: $color-white;
      text-align: center;
    }

    p {
      font-size: 0.9rem;
      color: $color-white;
      opacity: 0.9;
      text-align: center;
    }

    .newsletter__form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        width: 100%;
        padding: 10px 12px;
        border-radius: 8px;
        border: none;
        background-color: $color-white;
        font-size: 0.9rem;
        color: $color-black;

        &::placeholder {
          color: #b3b3b3;
        }
      }
      
        .newsletter__privacy {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 0.8rem;
            color: $color-white;
            opacity: 0.9;
    
            input[type="checkbox"] {
            width: 15px;
            height: 16px;
            }
        }
      .base-button {
        background-color: $color-primary-darker;
        &:hover {
          background-color: color.adjust($color-primary-darker, $lightness: -10%);
        }
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba($color-white, 0.2);
    padding: 20px 280px 0;
    flex-wrap: wrap;

    .footer__legal {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 0.85rem;
      span {
        color: $color-white;
        opacity: 0.9;
      }

      a {
        color: $color-primary-light;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: $color-primary-darker;
        }
      }
    }

    .footer__social {
      display: flex;
      align-items: center;
      gap: 12px;

      svg {
        color: $color-white;
        font-size: 1.3rem;
        cursor: pointer;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 120px 20px;
    gap: 40px;

    &__container {
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding: 0;
      text-align: center;
    }

    &__left,
    &__nav,
    &__newsletter {
      align-items: center;
      text-align: center;
    }

    &__left {
      .footer__partners {
        margin-left: 0; 
        justify-content: center; 
        display: flex;
        width: 100%;
        gap: 10px;
      }
    }

    &__nav {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px 24px;
      margin-top: 0;
    }

    &__bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px 35px 0;
      gap: 40px;
    }
  }
}

</style>
