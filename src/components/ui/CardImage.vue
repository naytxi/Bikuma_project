<template>
  <div class="card-image">
    <img :src="image" alt="Producto" class="card-image__img" />
  </div>
</template>

<script setup>
defineProps({
  image: String
})
</script>

<style lang="scss" scoped>
.card-image {
  width: 256px;
  height: 286px;
  border-radius: 32px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease;

  .card-image__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
