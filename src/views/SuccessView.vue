<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps({
  header: { type: String, required: true },
  body: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <div class="success-message-view">
    <div class="success-message-container">
      <Icon class="success-message-container__icon" :icon="icon" />
      <h1 class="success-message-container__header">{{ header }}</h1>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.success-message-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-message-container {
  text-align: center;
  max-width: 22rem;

  &__icon {
    color: main.$success-green;
    width: 7.5rem;
    height: auto;
  }

  &__header {
    color: main.$success-green;
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>
