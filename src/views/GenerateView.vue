<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Icon } from '@iconify/vue'
import DifficultyDropdown from '@/components/DifficultyDropdown.vue'
import TopicMultiselect from '@/components/TopicMultiselect.vue'
import { useProjectStore } from '@/stores/project'

const actionPhrases: Array<string> = [
  'What do you wanna build before your next all-nighter?',
  'Drop a topic — Hatsumai believes in you 🫶',
  'Brain go brrr 💡 What’s the vibe today?',
  'Hey genius, what’s cooking in that dev brain?',
  'Pick a topic — procrastination can wait.',
  'Start now, debug later (it’s tradition).',
  'Need a cool project for your portfolio... or your sanity?',
  'Let’s pretend we’re being productive — what’s the idea?',
  "Low-key genius move starts here. What's the topic?",
  'You + a keyboard + a random idea = ✨potential✨',
  'One topic away from your next coding arc.',
  'Be the dev you want to see in the world 🌍',
  'Ready to build something cool (or mildly chaotic)?',
  "Enter a topic — we'll hype you up from there.",
  'You bring the vibes, Hatsumai brings the inspo.',
  "Even if you don't finish it... it'll look great on GitHub 😉",
  'Okay boss dev, what are we tackling today?',
  "This could be the project that gets you hired. Just sayin'.",
  'Your future self will thank you (maybe).',
  "Greatness starts with one mildly unhinged idea. Let's go.",
]
const userInput: Ref<string> = ref('')
const randomActionPhrase = getActionPhrase()
const projectStore = useProjectStore()

function getActionPhrase() {
  return actionPhrases[Math.round(Math.random() * actionPhrases.length) - 1]
}
</script>

<template>
  <div class="generate-view-page">
    <h1 class="action-message">
      {{ randomActionPhrase }}
    </h1>
    <div class="user-interaction-container">
      <div class="user-interaction-container__user-selection">
        <textarea
          class="user-interaction-container__user-selection__input"
          placeholder="Type in some topics you want to explore — or just pick from the list below!"
          v-model="userInput"
        ></textarea>
        <DifficultyDropdown />
        <Icon icon="material-symbols-light:arrow-circle-up-rounded" class="submit-icon" />
      </div>
      <div class="user-interaction-container__topic-container">
        <TopicMultiselect />
        <div
          class="user-interaction-container__topic-container__divider"
          v-if="projectStore.selectedTopics.length !== 0"
        >
          |
        </div>
        <div class="user-interaction-container__topic-container__topics">
          <button
            class="user-interaction-container__topic-container__topics__topic"
            v-for="selectedTopic in projectStore.selectedTopics"
            v-bind:key="selectedTopic.topic"
            @click="projectStore.removeTopicByName(selectedTopic.topic)"
          >
            {{ selectedTopic.topic }}
            <Icon icon="material-symbols-light:close-rounded" class="clickable-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.generate-view-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.action-message {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: main.$navy-blue;
}

.user-interaction-container {
  width: 100%;
  max-width: 50rem;
  background-color: #f2efe9;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__user-selection {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__input {
      resize: none;
      width: 70%;
      border: none;
      background: none;
      padding: 0;
      font-size: 1rem;
      font-family: 'Roboto';
      field-sizing: content;
      padding-left: 0.75rem;

      &::placeholder {
        color: #6b7280;
      }
    }
  }

  &__topic-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;

    &__divider {
      color: main.$grey;
      font-size: 1rem;
    }

    &__topics {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;

      &__topic {
        font-family: 'Roboto';
        font-size: 1rem;
        color: main.$grey;
        border: none;
        border-radius: 0.75rem;
        padding: 0.5rem 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;

        &:hover {
          background-color: main.$light-grey-3;
        }
      }
    }
  }
}

.submit-icon {
  width: 2.5rem;
  height: auto;
  color: main.$grey;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: main.$light-grey;
  }
}
</style>
