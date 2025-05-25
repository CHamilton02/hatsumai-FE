<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'
import TopNavbar from './components/TopNavbar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <TopNavbar />
  <div class="main-layout">
    <SideNavbar />
    <main class="main-layout__body">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;

  &__body {
    margin-top: 5.5rem;
    width: 100%;
  }
}
</style>
