<script setup lang="ts">
import { useProjectStore } from '@/stores/project'
import { DifficultyLevel } from '@/types/Project'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { ref, type Ref } from 'vue'

const projectStore = useProjectStore()
const { selectedDifficulty } = storeToRefs(projectStore)
const isDropdownMenuVisible: Ref<boolean> = ref(false)

function onDifficultyDropdownToggle() {
  isDropdownMenuVisible.value = !isDropdownMenuVisible.value
}

function onDifficultyOptionSelection(difficultyOption: DifficultyLevel) {
  selectedDifficulty.value = difficultyOption
  isDropdownMenuVisible.value = false
}
</script>

<template>
  <div
    v-if="isDropdownMenuVisible"
    class="clickable-background"
    @click="onDifficultyDropdownToggle"
  ></div>
  <div>
    <button
      :class="
        isDropdownMenuVisible ? 'difficulty-dropdown-toggle--active' : 'difficulty-dropdown-toggle'
      "
      @click="onDifficultyDropdownToggle"
    >
      {{ selectedDifficulty ? selectedDifficulty : 'Difficulty Level' }}
      <Icon
        class="dropdown-icon"
        :icon="
          isDropdownMenuVisible
            ? 'material-symbols-light:keyboard-arrow-up'
            : 'material-symbols-light:keyboard-arrow-down'
        "
      />
    </button>
    <div
      class="difficulty-dropdown-menu"
      :class="{ 'difficulty-dropdown-menu--show': isDropdownMenuVisible }"
    >
      <button
        @click="onDifficultyOptionSelection(difficultyOption)"
        class="difficulty-dropdown-menu__option"
        v-for="difficultyOption in DifficultyLevel"
        :key="difficultyOption"
      >
        {{ difficultyOption }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.difficulty-dropdown-toggle {
  font-family: 'Roboto';
  border: none;
  font-size: 1rem;
  color: main.$grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  width: 10rem;
  border-radius: 0.75rem;
  background: none;

  &:hover {
    background-color: main.$light-grey-3;
  }

  &--active {
    @extend .difficulty-dropdown-toggle;
    background-color: main.$light-grey-3;
    border-radius: 0.75rem 0.75rem 0 0;
  }
}

.difficulty-dropdown-menu {
  display: none;
  position: absolute;
  background-color: main.$light-grey-3;
  border-radius: 0 0 0.75rem 0.75rem;
  width: 10rem;
  overflow: hidden;

  &--show {
    display: flex;
    flex-direction: column;
  }

  &__option {
    background: none;
    border: none;
    font-family: 'Roboto';
    font-size: 1rem;
    padding: 0.5rem 0;
    color: main.$grey;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}

.dropdown-icon {
  width: 2rem;
  height: auto;
}
</style>
