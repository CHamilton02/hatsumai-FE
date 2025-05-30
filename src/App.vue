<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <SideNavbar />

    <main class="app-container__main">
      <img class="app-logo" src="@/assets/hatsumaiLogo.svg" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100%;

  &__main {
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.app-logo {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
}
</style>
