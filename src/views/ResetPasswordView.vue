<script setup lang="ts">
import PasswordInput from '@/components/PasswordInput.vue'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { InvalidPasswordResetRequest } from '@/types/errors/User'

const route = useRoute()

const newPassword = ref('')
const reEnteredNewPassword = ref('')
const requestFailureMessage = ref('')
const isLoading = ref(false)

const userStore = useUserStore()

function onPasswordChange(password: string, reEnteredPassword: boolean) {
  if (reEnteredPassword) {
    reEnteredNewPassword.value = password
  } else {
    newPassword.value = password
  }
}

async function onResetPasswordActionButtonClick() {
  if (newPassword.value === reEnteredNewPassword.value) {
    try {
      isLoading.value = true
      await userStore.resetPassword(newPassword.value, route.query.token as string)
      isLoading.value = false
    } catch (error) {
      if (error instanceof InvalidPasswordResetRequest) {
        requestFailureMessage.value = error.message
      } else {
        requestFailureMessage.value =
          'Failed to send reset password request. Please try again later.'
      }
    }
  } else {
    requestFailureMessage.value = 'Both passwords must match.'
  }
}
</script>

<template>
  <div class="reset-password-view">
    <h1>Change Your Password</h1>
    <p>Enter a new password below to change your password.</p>
    <div class="reset-password-view__field">
      <label class="reset-password-view__field__label" for="password-field">New password</label>
      <PasswordInput
        placeholder-text="Enter your password"
        @user-input="(userInput) => onPasswordChange(userInput, false)"
        :error="requestFailureMessage !== ''"
      />
    </div>
    <div class="reset-password-view__field">
      <label class="reset-password-view__field__label" for="password-field"
        >Re-enter new password</label
      >
      <PasswordInput
        placeholder-text="Enter your password"
        @user-input="(userInput) => onPasswordChange(userInput, true)"
        :error="requestFailureMessage !== ''"
      />
      <div class="reset-password-view__error-message" v-if="requestFailureMessage">
        <Icon icon="material-symbols:error-outline" />
        <p>{{ requestFailureMessage }}</p>
      </div>
    </div>
    <button
      v-if="!isLoading"
      class="reset-password-view__action-button"
      :class="
        newPassword.length > 0 && reEnteredNewPassword.length > 0
          ? 'action-button'
          : 'action-button--disabled'
      "
      @click="onResetPasswordActionButtonClick"
    >
      Reset password
    </button>
    <button v-if="isLoading" class="action-button reset-password-view__action-button--loading">
      <Icon icon="line-md:loading-twotone-loop" class="loading-icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.reset-password-view {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__field {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 22rem;

    &__label {
      margin-left: 1rem;
      color: main.$navy-blue;
    }
  }

  &__error-message {
    display: flex;
    color: red;
    align-items: center;
    gap: 0.2rem;
  }

  &__action-button {
    max-width: 22rem;
    width: 100%;

    &--loading {
      @extend .reset-password-view__action-button;

      padding: 0.594rem;
    }
  }
}

.loading-icon {
  height: 1.75rem;
  width: auto;
}
</style>
