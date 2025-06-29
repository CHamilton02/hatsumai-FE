<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  placeholderText: String,
})
const emit = defineEmits(['userInput'])

const userEmail = ref('')

function onUserInput() {
  emit('userInput', userEmail.value)
}
</script>

<template>
  <div class="email-input-container">
    <input
      v-model="userEmail"
      :placeholder="placeholderText"
      type="text"
      class="email-input-container__input"
      @input="onUserInput"
      name="email-field"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.email-input-container {
  border: solid 0.01rem main.$light-grey-2;
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  &:focus-within {
    border-color: main.$navy-blue;
  }

  &__input {
    border: 0;
    width: 100%;
    font-size: 1rem;
    font-family: 'Roboto';

    &:focus {
      outline: none;
    }
  }
}
</style>
