<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="side-navbar">
    <button class="nav-button" :class="{ 'nav-button--active': route.path === '/' }">
      <RouterLink to="/" class="side-navbar__page">
        <Icon icon="material-symbols-light:home-outline" class="nav-icon" />
        Home
      </RouterLink>
    </button>
    <button class="nav-button" :class="{ 'nav-button--active': route.path === '/generate' }">
      <RouterLink to="/generate" class="side-navbar__page">
        <Icon icon="material-symbols-light:lightbulb-2-outline" class="nav-icon" />
        Generate
      </RouterLink>
    </button>
    <button class="nav-button" :class="{ 'nav-button--active': route.path === '/history' }">
      <RouterLink to="/history" class="side-navbar__page">
        <Icon icon="material-symbols-light:history" class="nav-icon" />
        History
      </RouterLink>
    </button>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.side-navbar {
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 0 0.75rem;
  max-width: 6.25rem;
  background-color: main.$navy-blue;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  z-index: 1;

  &__page {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: main.$light-grey-2;
    text-decoration: none;
  }
}

.nav-button {
  background: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: main.$navy-blue-2;
  }

  &--active {
    background-color: main.$navy-blue-2;
  }
}

.nav-icon {
  width: 3rem;
  height: auto;
  color: main.$light-grey-2;
}
</style>
