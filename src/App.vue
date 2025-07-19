<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'
import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
import MobileNav from './components/MobileNav.vue'
import { ref } from 'vue'

const windowWidth = ref(0)

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
})
</script>

<template>
  <div class="app-container">
    <div v-if="windowWidth >= 950">
      <SideNavbar />
      <TopNavbar />
    </div>
    <MobileNav v-if="windowWidth < 950" />
    <main class="app-container__main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100%;

  &__main {
    width: 100%;
    position: relative;
    margin-left: 5rem;
  }
}

@media only screen and (max-width: 949px) {
  .app-container__main {
    padding: 2.5rem;
    margin: 0;
  }
}

@media only screen and (min-width: 950px) {
  .app-container__main {
    padding: 0;
    margin-left: 5rem;
  }
}
</style>
