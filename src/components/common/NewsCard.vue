<template>
  <div class="news-card" :style="bgImageStyle">
    <div class="news-card__overlay">
      <div class="news-card__tag">{{ tag }}</div>
      <h5 class="news-card__title">{{ title }}</h5>
    </div>
  </div>
</template>


<script setup>
import Card from '@/components/ui/Card.vue'
import { computed } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  tag: { type: String, required: true },
  title: { type: String, required: true }
})

const bgImageStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.news-card {
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
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 122px;
    background: $color-white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    z-index: 2; 
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  &__tag {
    font-size: 0.8rem;
    font-weight: 700;
    color: $color-primary-light;
    text-transform: uppercase;
  }

  &__title {
    font-size: 1rem;
    font-weight: 700;
    color: $color-text-heading;
  }
}

@media (max-width: 768px) {
  .news-card {
    width: 220px;
    height: 260px;

    &__overlay {
      width: 220px;
      height: 120px;
      padding: 12px;
      bottom: 12px;
      gap:2px;
    }

    &__tag {
      font-size: 0.8rem;
      margin-top: 20px;
    }
    &__title {
      font-size: 1rem;
    }
  }
}
</style>


