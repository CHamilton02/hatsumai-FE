<script setup lang="ts">
import isEmailValid from '@/assets/utils/isEmailValid'
import EmailInput from '@/components/EmailInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
import { useUserStore } from '@/stores/user'
import type { User } from '@/types/User'
import { computed, ref, type Ref } from 'vue'

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
const signUpFailureMessage = ref('')

const userStore = useUserStore()

function onUserEmailChange(newUserEmail: string) {
  user.value.email = newUserEmail
}

function onUserPasswordChange(newUserPassword: string) {
  user.value.password = newUserPassword
}

async function onSignUpButtonClick() {
  if (isValidUser.value) {
    try {
      await userStore.register(user.value)
    } catch (error: unknown) {
      if (error instanceof Error) signUpFailureMessage.value = error.message
      else signUpFailureMessage.value = 'Failed to sign up. Please try again later.'
    }
  }
}
</script>

<template>
  <div class="sign-up-view-container">
    <h1>Level up your creativity!</h1>
    <div class="sign-up-view-container__field">
      <label class="sign-up-view-container__field__label" for="email-field">Email</label>
      <EmailInput
        @user-input="(userInput) => onUserEmailChange(userInput)"
        placeholder-text="Enter your email"
      />
    </div>
    <div class="sign-up-view-container__field">
      <label class="sign-up-view-container__field__label" for="password-field">Password</label>
      <PasswordInput
        @user-input="(userInput) => onUserPasswordChange(userInput)"
        placeholder-text="Enter your password"
      />
    </div>
    <p v-if="signUpFailureMessage" class="error-text">
      {{ signUpFailureMessage }}
    </p>
    <button
      :class="isValidUser ? 'action-button' : 'action-button--disabled'"
      @click="onSignUpButtonClick()"
    >
      Sign up
    </button>

    <p>Already have an account? <RouterLink to="/login">Log in here!</RouterLink></p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.sign-up-view-container {
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
