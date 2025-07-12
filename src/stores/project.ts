import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { DifficultyLevel } from '@/types/Project'
import type { Topic } from '@/types/Project'
import { getTopTenProjectTopicsService } from '@/services/projectService'

export const useProjectStore = defineStore('projectStore', () => {
  const selectedDifficulty: Ref<DifficultyLevel | undefined> = ref()
  const topics: Ref<Array<Topic>> = ref([])
  const selectedTopics = computed(() => {
    return topics.value.filter((topic) => topic.checked)
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

  return {
    selectedDifficulty,
    topics,
    selectedTopics,
    filteredTopics,
    toggleCheckOnTopic,
    removeTopicByName,
    addTopic,
    getTopTenProjectTopics,
  }
})
