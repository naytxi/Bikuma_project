<template>
  <button
    :class="['base-button', `base-button--${variant}`]"
    @click="handleClick"
  >
    <slot />
    <Icon
      v-if="showArrow"
      icon="mdi:arrow-right"
      class="base-button__icon"
    />
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  variant: {
    type: String,
    default: 'contactar',
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['click'])

const handleClick = (e) => {
  if (variant === 'contactar') {
    const el = document.getElementById('newsletter')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
  }
  emit('click', e)
}
</script>

<style lang="scss" scoped>
@use "sass:color";
@use "@/assets/styles/variables" as *;

.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  border-radius: 3.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &--contactar {
    background-color: $color-secondary;
    color: $color-white;
    border: none;

    &:hover {
      background-color: color.adjust($color-secondary, $lightness: -20%);
    }

    .base-button__icon {
      font-size: 1.2rem;
      color: $color-white;
    }
  }

  &--tienda {
    background-color: $color-white;
    color: $color-black;
    border: 0.1rem solid $color-black;

    &:hover {
      background-color: color.adjust($color-background, $lightness: -10%);
    }

    .base-button__icon {
      color: $color-black;
      font-size: 1.3rem;
    }
  }
}
</style>
