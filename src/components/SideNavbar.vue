<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <nav class="side-navbar">
    <RouterLink to="/" class="side-navbar__page">
      <Icon icon="material-symbols-light:home-outline" class="icon" />
      Home
    </RouterLink>
    <RouterLink to="/generate" class="side-navbar__page">
      <Icon icon="material-symbols-light:lightbulb-2-outline" class="icon" />
      Generate
    </RouterLink>
    <RouterLink to="/history" class="side-navbar__page">
      <Icon icon="material-symbols-light:history" class="icon" />
      History
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.side-navbar {
  height: 100%;
  max-width: 6.25rem;
  padding: 1rem;
  background-color: #f2efe9;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  z-index: 1;

  &__page {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
  }
}

.icon {
  width: 4rem;
  height: auto;
}
</style>
