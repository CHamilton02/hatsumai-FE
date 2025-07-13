<script setup lang="ts">
import isEmailValid from '@/assets/utils/isEmailValid'
import EmailInput from '@/components/EmailInput.vue'
import { useUserStore } from '@/stores/user'
import { EmailDoesNotExistError, ExistingPasswordResetRequest } from '@/types/errors/User'
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

const userEmail = ref('')
const isValidEmail = computed(() => {
  if (!!userEmail.value) {
    return isEmailValid(userEmail.value)
  }
  return false
})
const showEmailDoesNotExistMessage = ref(false)
const forgotPasswordRequestErrorMessage = ref('')

const userStore = useUserStore()

async function onSubmitClick() {
  try {
    await userStore.forgotPassword(userEmail.value)
  } catch (error) {
    if (error instanceof EmailDoesNotExistError) {
      showEmailDoesNotExistMessage.value = true
      forgotPasswordRequestErrorMessage.value = error.message
    } else if (error instanceof ExistingPasswordResetRequest) {
      forgotPasswordRequestErrorMessage.value = error.message
    } else {
      forgotPasswordRequestErrorMessage.value =
        'Failed to send reset password request. Please try again later.'
    }
  }
}
</script>

<template>
  <div class="forgot-password-view-container">
    <div class="forget-password-container">
      <h1>Reset password</h1>
      <p>
        Enter your email and we'll send you a link to help you gain access back to your account.
      </p>
      <EmailInput
        @user-input="(userInput) => (userEmail = userInput)"
        placeholder-text="Enter your email"
      />
      <div v-if="showEmailDoesNotExistMessage || forgotPasswordRequestErrorMessage">
        <div class="forget-password-container__error-message">
          <Icon
            icon="material-symbols:error-outline"
            class="forget-password-container__error-message__icon"
          />
          <p class="forget-password-container__error-message__message">
            {{ forgotPasswordRequestErrorMessage }}
            <RouterLink to="/sign-up">Sign up here</RouterLink>
          </p>
        </div>
      </div>
      <button
        class="forget-password-container__button"
        :class="isValidEmail ? 'action-button' : 'action-button--disabled'"
        @click="onSubmitClick"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.forgot-password-view-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.forget-password-container {
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    width: 100%;
    margin-top: 1rem;
  }

  &__error-message {
    display: flex;
    color: red;
    align-items: center;
    gap: 0.2rem;

    &__icon {
      width: 7.5%;
      height: auto;
    }

    &__message {
      width: 93.5%;
    }
  }
}
</style>
