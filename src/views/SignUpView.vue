<script setup lang="ts">
import EmailInput from '@/components/EmailInput.vue'
import PasswordInput from '@/components/PasswordInput.vue'
</script>

<template>
  <div class="sign-up-view-container">
    <h1>Level up your creativity!</h1>
    <div class="sign-up-view-container__field">
      <label class="sign-up-view-container__field__label" for="email-field">Email</label>
      <EmailInput
        @user-input="(userInput) => console.log(userInput)"
        placeholder-text="Enter your email"
      />
    </div>
    <div class="sign-up-view-container__field">
      <label class="sign-up-view-container__field__label" for="password-field">Password</label>
      <PasswordInput
        @user-input="(userInput) => console.log(userInput)"
        placeholder-text="Enter your password"
      />
    </div>
    <button class="action-button">Sign up</button>
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
