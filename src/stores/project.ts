import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { DifficultyLevel, Project } from '@/types/Project'
import type { Topic } from '@/types/Project'
import {
  getProjectByIdService,
  getTopTenProjectTopicsService,
  postGenerateProjectService,
} from '@/services/projectService'
import router from '@/router'

export const useProjectStore = defineStore('projectStore', () => {
  const selectedDifficulty: Ref<DifficultyLevel | undefined> = ref()
  const topics: Ref<Array<Topic>> = ref([])
  const selectedTopics = computed(() => {
    return topics.value.filter((topic) => topic.checked).map((topic) => topic.topic)
  })

  function filteredTopics(userInput: string) {
    return topics.value.filter((topic) => {
      return topic.topic.slice(0, userInput.length).toLowerCase() === userInput.toLowerCase()
    })
  }

  function toggleCheckOnTopic(index: number) {
    topics.value[index].checked = !topics.value[index].checked
  }

  function removeTopicByName(topicName: string) {
    topics.value.forEach((topic) => {
      topic.checked = topic.topic === topicName ? false : topic.checked
    })
  }

  function addTopic(topic: Topic) {
    topics.value.push(topic)
  }

  async function getTopTenProjectTopics() {
    try {
      return getTopTenProjectTopicsService()
    } catch {
      console.error('Failed to get top ten project topics.')
    }
  }

  async function postGenerateProject(description: string) {
    try {
      if (selectedDifficulty.value) {
        const projectId = (
          await postGenerateProjectService({
            topics: selectedTopics.value,
            difficulty: selectedDifficulty.value,
            description,
          })
        ).projectId
        router.push(`/project/${projectId}`)
      }
    } catch {
      console.error('Failed to generate project.')
    }
  }

  async function getProjectById(projectId: number) {
    try {
      const project: Project = (await getProjectByIdService(projectId)) as Project
      return project
    } catch {
      console.error('Failed to get project by id.')
    }
  }

  return {
    selectedDifficulty,
    topics,
    selectedTopics,
    filteredTopics,
    toggleCheckOnTopic,
    removeTopicByName,
    addTopic,
    getTopTenProjectTopics,
    postGenerateProject,
    getProjectById,
  }
})
