import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { DifficultyLevel } from '@/types/components/DifficultyDropdown'
import type { Topic } from '@/types/components/TopicMultiselect'

export const useProjectStore = defineStore('projectStore', () => {
  const selectedDifficulty: Ref<DifficultyLevel | undefined> = ref()
  const topics: Ref<Array<Topic>> = ref([
    {
      topic: 'React',
      checked: false,
    },
    {
      topic: 'Vue',
      checked: false,
    },
    {
      topic: 'TypeScript',
      checked: false,
    },
    {
      topic: 'Firebase',
      checked: false,
    },
    {
      topic: 'Express',
      checked: false,
    },
    {
      topic: 'AI',
      checked: false,
    },
    {
      topic: 'Front-end Dev',
      checked: false,
    },
    {
      topic: 'Back-end Dev',
      checked: false,
    },
  ])
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

  return {
    selectedDifficulty,
    topics,
    selectedTopics,
    filteredTopics,
    toggleCheckOnTopic,
    removeTopicByName,
    addTopic,
  }
})
