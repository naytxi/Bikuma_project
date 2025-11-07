<template>
  <div class="project-card" :style="bgImageStyle">
    <div class="project-card__overlay">
      <h5 class="project-card__title">{{ title }}</h5>
      <div class="project-card__location">
        <Icon icon="lucide:map-pin" width="16" height="16" />
        <span>{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true }
})

const bgImageStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.project-card {
  width: 320px;
  height: 350px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 122px;
    background: $color-white;
    border-radius: 16px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
    z-index: 2; 
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    color: $color-text-heading;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: 0.9rem;
    color: $color-primary-light;

    svg {
      color: $color-primary-light;
    }
  }
}

@media (max-width: 768px) {
  .project-card {
    width: 220px;
    height: 260px;

    &__overlay {
      width: 200px;
      height: 90px;
      padding: 12px;
      bottom: 12px;
      gap: 1px;
    }

    &__title {
      font-size: 0.95rem;
    }

    &__location {
      font-size: 0.85rem;
    }
  }
}
</style>
