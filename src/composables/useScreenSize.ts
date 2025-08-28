import { ref, onMounted, onUnmounted } from 'vue'

export function useScreenSize(breakpoint = 950) {
  const isLargeScreen = ref(window.innerWidth >= breakpoint)

  function handleResize() {
    isLargeScreen.value = window.innerWidth >= breakpoint
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return { isLargeScreen }
}
