<script setup lang="ts">
import { ref, type Ref } from 'vue'

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
    <input
      class="generate-view-container__input"
      placeholder="Got an idea? Type in some topics you want to explore — or just pick from the list below!"
      v-model="userInput"
    />
  </div>
</template>

<style scoped lang="scss">
.generate-view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;

  &__action-message {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    max-width: 50rem;
    padding: 1rem 0rem 1rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #f2efe9;

    &::placeholder {
      color: black;
    }
  }
}
</style>
