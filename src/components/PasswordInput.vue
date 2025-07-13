<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

defineProps({
  placeholderText: String,
  error: Boolean,
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
  <div :class="error ? 'input-field--error' : 'input-field'">
    <input
      v-model="userPassword"
      :placeholder="placeholderText"
      :type="showPassword ? 'text' : 'password'"
      class="input-field__input"
      @input="onUserInput"
      name="password-field"
    />
    <Icon
      :icon="showPassword ? 'ep:hide' : 'clarity:eye-show-line'"
      @click="toggleShowPassword"
      class="icon"
    />
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: 1.5rem;
  height: auto;
}
</style>
