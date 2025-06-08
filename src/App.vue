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
    width: 100%;
    padding: 0 2rem;
    position: relative;
    margin-left: 5rem;
  }
}

.app-logo {
  position: fixed;
  top: 1rem;
  left: 7rem;
}
</style>
