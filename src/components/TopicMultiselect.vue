<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import { Icon } from '@iconify/vue'
import { computed, ref, type Ref } from 'vue'

const isMultiselectMenuVisible: Ref<boolean> = ref(false)
const inputtedTopic = defineModel()
const projectStore = useProjectStore()
const displayedTopics = computed(() => {
  return projectStore.filteredTopics(inputtedTopic.value ? String(inputtedTopic.value) : '')
})

function onMultiselectButtonClick() {
  isMultiselectMenuVisible.value = true
}

function onOutsideContainerClick() {
  isMultiselectMenuVisible.value = false
}

function onCheckboxToggle(index: number) {
  projectStore.toggleCheckOnTopic(index)
}

function onAddButtonClick() {
  if (typeof inputtedTopic.value === 'string')
    projectStore.addTopic({ topic: inputtedTopic.value, checked: true })
  inputtedTopic.value = ''
}
</script>

<template>
  <div
    v-if="isMultiselectMenuVisible"
    class="clickable-background"
    @click="onOutsideContainerClick"
  ></div>
  <button
    :class="{
      'topic-multiselect--active--menu-active': displayedTopics.length && isMultiselectMenuVisible,
      'topic-multiselect--active': isMultiselectMenuVisible,
    }"
    class="topic-multiselect"
    @click="onMultiselectButtonClick"
  >
    <Icon icon="material-symbols-light:topic-outline-rounded" class="icon" />
    <input
      type="text"
      class="topic-multiselect__input"
      v-model="inputtedTopic"
      placeholder="Add topics here"
      @keyup.enter="onAddButtonClick"
    />
    <button
      class="invisible-button"
      @click="onAddButtonClick"
      v-if="isMultiselectMenuVisible && !displayedTopics.length"
    >
      <Icon icon="material-symbols-light:add-circle-rounded" class="add-icon" />
    </button>
  </button>

  <div
    class="topic-multiselect-menu"
    :class="{ 'topic-multiselect-menu--show': isMultiselectMenuVisible }"
  >
    <button
      class="topic-multiselect-menu__option"
      v-for="(topic, index) in displayedTopics"
      :key="`${topic}-${index}`"
      @click="onCheckboxToggle(index)"
    >
      <input type="checkbox" :checked="topic.checked" />
      {{ topic.topic }}
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.topic-multiselect {
  position: relative;
  display: flex;
  align-items: center;
  background: none;
  gap: 0.2rem;
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  width: 13.5rem;
  height: 2.5rem;
  border-radius: 0.6rem;
  border: none;
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: main.$light-grey-3;
  }

  &--active {
    @extend .topic-multiselect;
    background-color: main.$light-grey-3;

    &--menu-active {
      border-radius: 0.75rem 0.75rem 0 0;
    }
  }

  &__input {
    background: none;
    border: none;
    font-size: 1rem;
    font-family: Roboto;
    color: main.$grey;
    width: 8rem;

    &:focus {
      outline: none;
    }
  }
}

.topic-multiselect-menu {
  display: none;
  position: absolute;
  background-color: main.$light-grey-3;
  border-radius: 0 0 0.75rem 0.75rem;
  width: 13.5rem;
  max-height: 11rem;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;

  &--show {
    display: flex;
    flex-direction: column;
  }

  &__option {
    background: none;
    border: none;
    font-family: 'Roboto';
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
    color: main.$grey;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: baseline;
    gap: 0.5rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: main.$grey;
}

.add-icon {
  @extend .icon;

  &:hover {
    color: main.$light-grey;
  }
}

.clickable-background {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
