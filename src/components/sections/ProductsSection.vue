<template>
  <section class="products">
    <!-- Título arriba de las cards -->
    <h2>Productos</h2>

    <div class="products__grid">
      <div class="products__item" v-for="product in products" :key="product.id">
        <CardImage :image="product.image" />
        <h6 class="products__title">{{ product.title }}</h6>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardImage from '@/components/ui/CardImage.vue'

const products = [
  { id: 1, title: 'Señalización. Diseño, validación y fabricación', image: new URL('@/assets/image/producto1.jpg', import.meta.url).href },
  { id: 2, title: 'Planos y cuadros tactovisuales', image: new URL('@/assets/image/producto2.jpg', import.meta.url).href },
  { id: 3, title: 'Papelería, vinilos y etiquetas', image: new URL('@/assets/image/producto3.png', import.meta.url).href },
  { id: 4, title: 'Pavimento tactil', image: new URL('@/assets/image/producto4.jpg', import.meta.url).href },
]
</script>

<style lang="scss" scoped>
.products {
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:40px;

  &__grid {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.8);
    }
  }
    .products__title {
    margin-top: 16px;
    font-size: 12px;
    margin-left: 12px;
    margin-right: 12%;
  }
}

@media (max-width: 768px) {

  .products {
    padding: 80px 10px;
  }

  .products__grid {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .products__item {
    width: 60%;
  }
}
</style>
