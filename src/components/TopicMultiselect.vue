<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import { Icon } from '@iconify/vue'
import { computed, ref, type Ref } from 'vue'

const isMultiselectMenuVisible: Ref<boolean> = ref(false)
const inputtedTopic = defineModel()
const projectStore = useProjectStore()
const displayedTopics = computed(() => {
  projectStore.filterTopics(inputtedTopic.value ? String(inputtedTopic.value) : '')
  return projectStore.filteredTopics
})

function onMultiselectButtonClick() {
  isMultiselectMenuVisible.value = true
}

function onCloseMultiselectAction() {
  isMultiselectMenuVisible.value = false
  inputtedTopic.value = ''
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
    @click="onCloseMultiselectAction"
  ></div>
  <div class="topic-multiselect-container">
    <button
      :class="{
        'topic-multiselect--active--menu-active':
          displayedTopics.length && isMultiselectMenuVisible,
        'topic-multiselect--active': isMultiselectMenuVisible,
      }"
      class="topic-multiselect"
      @click="onMultiselectButtonClick"
    >
      <div class="topic-multiselect__input-container">
        <Icon icon="material-symbols-light:topic-outline-rounded" class="icon" />
        <input
          type="text"
          class="topic-multiselect__input-container__input"
          v-model="inputtedTopic"
          placeholder="Add topics here"
          @keyup.enter="onAddButtonClick"
        />
      </div>
      <div>
        <button
          class="invisible-button"
          @click="onAddButtonClick"
          v-if="isMultiselectMenuVisible && !displayedTopics.length"
        >
          <Icon icon="material-symbols-light:add-circle-rounded" class="clickable-icon" />
        </button>
        <button
          class="invisible-button"
          @click.stop="onCloseMultiselectAction"
          v-if="isMultiselectMenuVisible"
        >
          <Icon icon="material-symbols-light:close-rounded" class="clickable-icon" />
        </button>
      </div>
    </button>

    <div
      class="topic-multiselect-menu"
      :class="{ 'topic-multiselect-menu--show': isMultiselectMenuVisible }"
    >
      <div class="topic-multiselect-menu__option-container">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.topic-multiselect-container {
  position: relative;
}

.topic-multiselect {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  gap: 0.2rem;
  padding: 0.5rem 0rem 0.5rem 0.75rem;
  width: 15.5rem;
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
      border-bottom: solid 0.01rem main.$grey;
    }
  }

  &__input-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;

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
}

.topic-multiselect-menu {
  display: none;
  position: absolute;
  top: 2.5rem;
  background-color: main.$light-grey-3;
  border-radius: 0 0 0.75rem 0.75rem;
  width: 15.5rem;
  max-height: 11rem;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 1;

  &--show {
    display: flex;
    flex-direction: column;
  }

  &__option-container {
    max-height: 11rem;
    overflow-y: scroll;
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

.clickable-icon {
  @extend .icon;

  &:hover {
    color: main.$light-grey;
  }
}
</style>
