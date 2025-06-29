<script setup lang="ts">
import EmailInput from '@/components/EmailInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
</script>

<template>
  <div class="login-view-container">
    <h1>Nice to see you again!</h1>
    <div class="login-view-container__field">
      <label class="login-view-container__field__label" for="email-field">Email</label>
      <EmailInput
        @user-input="(userInput) => console.log(userInput)"
        placeholder-text="Enter your email"
      />
    </div>
    <div class="login-view-container__field">
      <label class="login-view-container__field__label" for="password-field">Password</label>
      <PasswordInput
        @user-input="(userInput) => console.log(userInput)"
        placeholder-text="Enter your password"
      />
    </div>
    <button class="action-button">Log in</button>
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
