<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'
import TopNavbar from './components/TopNavbar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <TopNavbar />
    <SideNavbar />
  </nav>
  <main class="app-body">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.app-body {
  padding-left: 20%;
  padding-top: 20%;
}
</style>
