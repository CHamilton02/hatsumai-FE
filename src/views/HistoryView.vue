<script setup lang="ts">
import router from '@/router'
import { useProjectStore } from '@/stores/project'
import type { PreviousProjectIdea } from '@/types/Project'
import { onMounted, ref, type Ref } from 'vue'

const previousProjects: Ref<Array<PreviousProjectIdea>> = ref([])
const projectStore = useProjectStore()
const showLoginMessage = ref(false)

onMounted(async () => {
  try {
    previousProjects.value = await projectStore.getProjectHistory()
  } catch {
    showLoginMessage.value = true
  }
})

function onViewDetailsButtonClick(projectId: number) {
  router.push(`/project/${projectId}`)
}
</script>

<template>
  <div class="history-view-container">
    <div class="history-view" v-if="!showLoginMessage && previousProjects.length > 0">
      <h1 class="history-view__header">Previous Project Ideas</h1>
      <div class="history-view__projects-container">
        <div v-for="project in previousProjects" :key="project.title" class="history-view__project">
          <div class="history-view__project__title">{{ project.title }}</div>
          <p class="history-view__project__description">{{ project.description }}</p>
          <div class="history-view__project__topics">
            <div
              v-for="topic in project.topics.slice(0, 2)"
              :key="`${project.title}-${topic}`"
              class="history-view__project__topics__topic"
            >
              {{ topic }}
            </div>
            <div v-if="project.topics.length > 2" class="history-view__project__topics__topic">
              {{ `+ ${project.topics.length - 2} more` }}
            </div>
          </div>
          <button
            class="history-view__project__view-details action-button"
            @click="onViewDetailsButtonClick(project.id)"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="login-message-container" v-if="showLoginMessage">
    <h1>Log in to view your project history!</h1>
  </div>
  <div class="login-message-container" v-if="previousProjects.length <= 0">
    <h1>You haven't generated any projects yet!</h1>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/main.scss';

.history-view-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.history-view {
  max-width: 50rem;
  padding-bottom: 2rem;

  &__header {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  &__projects-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__project {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f2efe9;
    padding: 1rem;
    border-radius: 0.75rem;
    overflow: hidden;

    &__title {
      font-weight: 600;
    }

    &__description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__topics {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      width: 6rem;

      &__topic {
        background-color: main.$light-grey-3;
        padding: 0.25rem 0.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 0.35rem;
        font-family: 'Roboto';
        font-size: 0.9rem;
      }
    }

    &__view-details {
      white-space: nowrap;
      font-size: 1rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
    }
  }
}

.login-message-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
