<script setup lang="ts">
import SideNavbar from './components/SideNavbar.vue'
import { RouterView } from 'vue-router'
import TopNavbar from './components/TopNavbar.vue'
import MobileNav from './components/MobileNav.vue'
import { useAppStore } from './stores/app'
import { Icon } from '@iconify/vue'
import { useScreenSize } from './composables/useScreenSize'

const appStore = useAppStore()
const { isLargeScreen } = useScreenSize()
</script>

<template>
  <div class="app-container">
    <div v-if="isLargeScreen">
      <SideNavbar />
      <TopNavbar />
    </div>
    <MobileNav v-else />
    <main class="app-container__main">
      <div class="app-container__main__loading" v-if="appStore.loading">
        <Icon icon="line-md:loading-twotone-loop" class="app-container__main__loading__icon" />
      </div>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.app-container {
  display: flex;
  height: 100%;

  &__main {
    width: 100%;
    position: relative;
    margin-left: 5rem;

    &__loading {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      &__icon {
        width: 4rem;
        height: auto;
        color: main.$navy-blue-light;
      }
    }
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
