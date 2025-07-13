import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { DifficultyLevel, PreviousProjectIdea, Project } from '@/types/Project'
import type { Topic } from '@/types/Project'
import {
  getProjectByIdService,
  getProjectHistoryService,
  getTopTenProjectTopicsService,
  postGenerateProjectService,
} from '@/services/projectService'
import router from '@/router'

export const useProjectStore = defineStore('projectStore', () => {
  const selectedDifficulty: Ref<DifficultyLevel | undefined> = ref()
  const topics: Ref<Array<Topic>> = ref([])
  const filteredTopics: Ref<Array<Topic>> = ref([])
  const selectedTopics = computed(() => {
    return topics.value.filter((topic) => topic.checked).map((topic) => topic.topic)
  })

  function filterTopics(userInput: string) {
    filteredTopics.value = topics.value.filter((topic) => {
      return topic.topic.slice(0, userInput.length).toLowerCase() === userInput.toLowerCase()
    })
  }

  function toggleCheckOnTopic(index: number) {
    filteredTopics.value[index].checked = !filteredTopics.value[index].checked
  }

  function removeTopicByName(topicName: string) {
    topics.value.forEach((topic) => {
      topic.checked = topic.topic === topicName ? false : topic.checked
    })
  }

  function addTopic(topic: Topic) {
    topics.value.push(topic)
  }

  function clearSelections() {
    topics.value = topics.value.map((topic) => {
      return {
        topic: topic.topic,
        checked: false,
      }
    })
    selectedDifficulty.value = undefined
  }

  async function getTopTenProjectTopics() {
    try {
      return await getTopTenProjectTopicsService()
    } catch {
      redirectToErrorPage('Failed to get top ten project topics.')
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
        clearSelections()
        router.push(`/project/${projectId}`)
      }
    } catch {
      redirectToErrorPage('Failed to generate project.')
    }
  }

  async function getProjectById(projectId: number) {
    try {
      const project: Project = await getProjectByIdService(projectId)
      return project
    } catch {
      redirectToErrorPage('Failed to get project by id.')
    }
  }

  async function getProjectHistory(loggedIn: boolean) {
    try {
      const projectHistory: Array<PreviousProjectIdea> = await getProjectHistoryService()
      return projectHistory
    } catch {
      if (!loggedIn) {
        console.error('Failed to get project history.')
        throw new Error()
      }
      redirectToErrorPage('Failed to get project history')
    }
  }

  function redirectToErrorPage(errorMessage: string) {
    console.error(errorMessage)
    router.push('/error')
  }

  return {
    selectedDifficulty,
    topics,
    selectedTopics,
    filteredTopics,
    filterTopics,
    toggleCheckOnTopic,
    removeTopicByName,
    addTopic,
    getTopTenProjectTopics,
    postGenerateProject,
    getProjectById,
    getProjectHistory,
  }
})
