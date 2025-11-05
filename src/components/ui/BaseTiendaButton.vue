<template>
  <button class="base-tienda-button" @click="$emit('click')">
    <Icon icon="mdi:cart-outline" class="base-tienda-button__icon" />
    <span><slot /></span>
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

.base-tienda-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 33px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  background-color: $color-white;
  color: $color-black;
  border: 1px solid $color-black;

  &:hover {
    background-color: color.adjust($color-background, $lightness: -10%);
  }

  &__icon {
    font-size: 1.3rem;
    color: $color-black;
  }
}
</style>
