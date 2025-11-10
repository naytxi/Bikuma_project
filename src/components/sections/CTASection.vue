<template>
  <section class="cta">
    <div class="cta__cards">
      <Card title="Tienda  online" text="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida" braille="⠞"/>
      <Card title="Administración pública" text="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida" braille="⠁"/>
      <Card title="Fabricamos a medida" text="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida" braille="⠋"/>
      <Card title="Digitalización accesible" text="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida" braille="⠙"/>
    </div>
  </section>
</template>

<script setup>
import Card from '@/components/ui/Card.vue'
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.cta {
  display: flex;
  justify-content: center;

  &__cards {
    display: flex;
    gap: 38px;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .cta__cards {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
}
</style>
