<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

defineProps({
  placeholderText: String,
})
const emit = defineEmits(['userInput'])

const userPassword = ref('')
const showPassword = ref(false)

function toggleShowPassword() {
  showPassword.value = !showPassword.value
}

function onUserInput() {
  emit('userInput', userPassword.value)
}
</script>

<template>
  <div class="password-form-container">
    <input
      v-model="userPassword"
      :placeholder="placeholderText"
      :type="showPassword ? 'text' : 'password'"
      class="password-form-container__input"
      @input="onUserInput"
      name="password-field"
    />
    <Icon
      :icon="showPassword ? 'ep:hide' : 'clarity:eye-show-line'"
      @click="toggleShowPassword"
      class="password-form-container__icon"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.password-form-container {
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

  &__icon {
    width: 1.5rem;
    height: auto;
  }
}
</style>
