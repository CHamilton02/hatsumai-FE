<script setup lang="ts"></script>

<template>
  <div class="home-view-container">
    <h1 class="home-view-container__title">Welcome to Hatsumai!</h1>
    <h2 class="home-view-container__subtitle">Let's build something amazing.</h2>
    <RouterLink to="/generate"><button class="action-button">Get Started</button></RouterLink>
  </div>
</template>

<style scoped lang="scss">
.home-view-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 2.5rem;
  }

  &__subtitle {
    margin: 1rem 0 1rem 0;
  }
}
</style>
