<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'

import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
</script>

<template>
  <div class="app-container">
    <SideNavbar />
    <TopNavbar />
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
</style>
