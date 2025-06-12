<script setup lang="ts"></script>

<template>
  <div class="top-navbar">
    <img src="@/assets/hatsumaiLogo.svg" />
    <div class="top-navbar__log-in-buttons">
      <button class="action-button">Log in</button>
      <button class="action-button--alt">Sign up for free</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.top-navbar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 1rem;
  left: 7rem;
  right: 0rem;
  z-index: 5;

  &__log-in-buttons {
    padding-right: 1rem;
    display: flex;
    gap: 1rem;
  }
}
</style>
