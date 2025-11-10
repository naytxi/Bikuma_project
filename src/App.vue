<template>
  <div id="app" class="app">
    <RouterView /> 
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@use "@/assets/styles/variables" as *;

.app {
  background-color: $color-background;
  min-height: 100vh;
}
</style>
