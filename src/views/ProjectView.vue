<script setup lang="ts">
import { Icon } from '@iconify/vue'

const tips = [
  'Use React components for each section (e.g., ‹LandingPage />, ‹Projects />, ‹Contact/>).',
  'Leverage Sass features like variables and mixins to create a cohesive design.',
  'Focus on responsive design using media queries in Sass for different screen sizes.',
]
</script>

<template>
  <div class="idea-view-container">
    <div class="idea-view">
      <h1>Portfolio Website</h1>
      <p>
        Build a simple portfolio website showcasing three sections: a landing page, a "Projects"
        section with cards displaying brief details, and a "Contact" section with a contact form.
        Use React for structure, Sass for styling, and ensure it is fully responsive.
      </p>
      <h2>Tips</h2>
      <div v-for="(tip, index) in tips" :key="`tip-${index}`" class="idea-view__tip">
        {{ tip }}
      </div>
      <button class="action-button idea-view__download-button">
        <Icon icon="material-symbols-light:download-rounded" class="download-icon" />
        Download
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.idea-view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.idea-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  gap: 1rem;

  &__tip {
    background-color: #f2efe9;
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
  }

  &__download-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin-top: 1rem;
  }
}

.download-icon {
  width: 1.5rem;
  height: auto;
}
</style>
