import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useCarousel(items, options = {}) {
  const currentIndex = ref(0)
  let interval = null

  const {
    autoPlay = false,
    delay = 5000,
    loop = true
  } = options

  const total = computed(() => (items.value ? items.value.length : 0))

  const next = () => {
    if (currentIndex.value < total.value - 1) {
      currentIndex.value++
    } else if (loop) {
      currentIndex.value = 0
    }
  }

  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else if (loop) {
      currentIndex.value = total.value - 1
    }
  }

  const goTo = (index) => {
    if (index >= 0 && index < total.value) currentIndex.value = index
  }

  onMounted(() => {
    if (autoPlay) interval = setInterval(next, delay)
  })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })

  return {
    currentIndex,
    next,
    prev,
    goTo
  }
}
