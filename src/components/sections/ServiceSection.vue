<template>
  <section class="service-section">
    <div class="service-section__cards">
        <h2 class="service-section__title">Servicios</h2>
      <div class="service-section__row">
        <Card title="Accesibilidad en comunicación" text="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida" braille="⠁" />
        <Card title="Servicios de digitalización" text="Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget" braille="⠎" />
        <Card title="Diagnósticos y planes estratégicos" text="Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula " braille="⠙" />
        <Card title="Evacuación y emergencia" text="Donec et nibh facilisis, lobortis lacus non, viverra ante integer" braille="⠋" />
      </div>

      <div class="service-section__row service-section__row--bottom">
        <Card title="Formación en inclusión" text="Donec et nibh facilisis, lobortis lacus non, viverra ante integer" braille="⠋" />
        <Card title="Restauración inclusiva" text="Donec et nibh facilisis, lobortis lacus non, viverra ante integer" braille="⠗" />
        <Card title="Simulación de entornos 3D" text="Donec et nibh facilisis, lobortis lacus non, viverra ante integer" braille="⠎" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from '@/components/ui/Card.vue'
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.service-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  &__cards {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }

  &__row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 38px;
    width: 100%;
    max-width: 1200px;

    &--bottom {
      justify-content: center; 
      gap: 38px;
    }
  }
}

@media (max-width: 768px) {
  .service-section__cards {
    gap: 28px;
  }

  .service-section__title {
   font-size: 2rem;
  }

  .service-section__row {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
}
</style>
