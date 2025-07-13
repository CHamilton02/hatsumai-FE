<script setup lang="ts"></script>

<template>
  <div class="error-message-container">
    <h1>Uh oh, something went wrong. Please try again later.</h1>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.error-message-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
