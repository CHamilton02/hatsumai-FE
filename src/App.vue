<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'
import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
import MobileNav from './components/MobileNav.vue'
</script>

<template>
  <div class="app-container">
    <div class="regular-nav">
      <SideNavbar />
      <TopNavbar />
    </div>
    <MobileNav class="small-screen-nav" />
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

  .small-screen-nav {
    display: initial;
  }

  .regular-nav {
    display: none;
  }
}

@media only screen and (min-width: 950px) {
  .app-container__main {
    padding: 0;
    margin-left: 5rem;
  }

  .small-screen-nav {
    display: none;
  }

  .regular-nav {
    display: initial;
  }
}
</style>
