<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { Icon } from '@iconify/vue'

const generateProjectActionPhrases: Array<string> = [
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
</script>

<template>
  <div class="generate-view-container">
    <h1 class="generate-view-container__action-message">
      {{
        generateProjectActionPhrases[
          Math.round(Math.random() * generateProjectActionPhrases.length) - 1
        ]
      }}
    </h1>
    <div class="generate-view-container__user-interaction-container">
      <div class="generate-view-container__user-interaction-container__user-selection">
        <textarea
          class="generate-view-container__user-interaction-container__user-selection__input"
          placeholder="Type in some topics you want to explore — or just pick from the list below!"
          v-model="userInput"
        ></textarea>
        <button
          class="generate-view-container__user-interaction-container__user-selection__difficulty-level"
        >
          Difficulty Level
          <Icon icon="material-symbols-light:keyboard-arrow-down" class="dropdown-icon" />
        </button>
        <Icon icon="material-symbols-light:arrow-circle-up-outline-rounded" class="submit-icon" />
      </div>
      <button class="generate-view-container__user-interaction-container__topic-ideas">
        <Icon icon="material-symbols-light:topic-outline-rounded" class="file-icon" /> Topics
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.generate-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__action-message {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #34b3f1;
  }

  &__user-interaction-container {
    width: 100%;
    max-width: 50rem;
    background-color: #f2efe9;
    padding: 1rem;
    border-radius: 1rem;

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

      &__difficulty-level {
        font-size: 1rem;
        font-family: 'Roboto';
        color: #333b4f;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: #eae6dd;
        }
      }
    }

    &__topic-ideas {
      display: flex;
      align-items: center;
      background: none;
      gap: 0.2rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.6rem;
      border: none;
      font-size: 1rem;
      color: #333b4f;

      &:hover {
        background-color: #eae6dd;
      }
    }
  }
}

.dropdown-icon {
  width: 1.5rem;
  height: auto;
  color: #333b4f;
}

.file-icon {
  width: 1.5rem;
  height: auto;
  color: #333b4f;
}

.submit-icon {
  width: 2.5rem;
  height: auto;
  color: #333b4f;
}
</style>
