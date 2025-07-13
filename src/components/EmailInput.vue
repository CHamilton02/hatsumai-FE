<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  placeholderText: String,
  error: Boolean,
})
const emit = defineEmits(['userInput'])

const userEmail = ref('')

function onUserInput() {
  emit('userInput', userEmail.value)
}
</script>

<template>
  <div :class="error ? 'input-field--error' : 'input-field'">
    <input
      v-model="userEmail"
      :placeholder="placeholderText"
      type="text"
      class="input-field__input"
      @input="onUserInput"
      name="email-field"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';
</style>
