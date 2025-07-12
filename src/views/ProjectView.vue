<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import type { Project } from '@/types/Project'
import { Icon } from '@iconify/vue'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const project: Ref<Project | undefined> = ref()
const projectStore = useProjectStore()

onMounted(async () => {
  project.value = await projectStore.getProjectById(Number(route.params.id))
})
</script>

<template>
  <div class="idea-view-container">
    <div class="idea-view" v-if="project">
      <h1>{{ project.title }}</h1>
      <p>
        {{ project.description }}
      </p>
      <h2>Tips</h2>
      <div v-for="(tip, index) in project.tips" :key="`tip-${index}`" class="idea-view__tip">
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
