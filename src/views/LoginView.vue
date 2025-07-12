<script setup lang="ts">
import EmailInput from '@/components/EmailInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { useUserStore } from '@/stores/user'
import type { User } from '@/types/User'
import { computed, ref, type Ref } from 'vue'
import isEmailValid from '@/assets/utils/isEmailValid.ts'

const user: Ref<User> = ref({
  email: '',
  password: '',
})
const isValidUser = computed(() => {
  if (!!user.value.email && !!user.value.password) {
    return isEmailValid(user.value.email)
  }
  return false
})
const requestFailureMessage = ref('')

const userStore = useUserStore()

function onUserEmailChange(newUserEmail: string) {
  user.value.email = newUserEmail
}

function onUserPasswordChange(newUserPassword: string) {
  user.value.password = newUserPassword
}

async function onLogInButtonClick() {
  if (isValidUser.value) {
    try {
      await userStore.login(user.value)
    } catch (error: unknown) {
      if (error instanceof Error) requestFailureMessage.value = error.message
      else requestFailureMessage.value = 'Failed to log in. Please try again later.'
    }
  }
}
</script>

<template>
  <div class="login-view-container">
    <h1>Nice to see you again!</h1>
    <div class="login-view-container__field">
      <label class="login-view-container__field__label" for="email-field">Email</label>
      <EmailInput
        @user-input="(userInput) => onUserEmailChange(userInput)"
        placeholder-text="Enter your email"
      />
    </div>
    <div class="login-view-container__field">
      <label class="login-view-container__field__label" for="password-field">Password</label>
      <PasswordInput
        @user-input="(userInput) => onUserPasswordChange(userInput)"
        placeholder-text="Enter your password"
      />
    </div>
    <p v-if="requestFailureMessage" class="error-text">{{ requestFailureMessage }}</p>
    <button
      :class="isValidUser ? 'action-button' : 'action-button--disabled'"
      @click="onLogInButtonClick"
    >
      Log in
    </button>
    <p>Don't have an account? <RouterLink to="/sign-up">Sign up here!</RouterLink></p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.login-view-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__field {
    width: 100%;
    max-width: 22rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &__label {
      margin-left: 1rem;
      color: main.$navy-blue;
    }
  }
}
</style>
