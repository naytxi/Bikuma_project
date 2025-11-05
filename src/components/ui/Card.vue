<template>
  <div class="card">
    <div class="card__braille">{{ braille }}</div>
    <h5 class="card__title">{{ title }}</h5>
    <p class="card__text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  braille: String
})
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.card {
  width: 256.5px;
  height: 286.41px;
  padding: 48px 24px;
  gap: 10px;
  border-radius: 32px;
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
   transition: box-shadow 0.3s ease;

    &:hover {
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.8);
  }

  &__braille {
    font-size: 2rem;
    color: $color-secondary;
    margin-bottom: 7px;
  }

  &__title {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-weight: 700;
    font-size: 1.55rem;
    color: $color-text-heading;
    margin-bottom: 8px;
  }

  &__text {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: $color-text-body;
  }
}
</style>
