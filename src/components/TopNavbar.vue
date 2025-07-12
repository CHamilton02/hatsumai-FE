<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const showUserDropdown = ref(false)

const userStore = useUserStore()

function onUserIconClick() {
  showUserDropdown.value = !showUserDropdown.value
}

function onLogoutButtonClick() {
  userStore.logout()
}
</script>

<template>
  <div class="top-navbar">
    <img src="@/assets/hatsumaiLogo.svg" />
    <div class="top-navbar__log-in-buttons" v-if="!userStore.userEmail">
      <RouterLink to="/login"><button class="action-button">Log in</button></RouterLink>
      <RouterLink to="/sign-up"
        ><button class="action-button--alt">Sign up for free</button></RouterLink
      >
    </div>
    <div v-if="userStore.userEmail" class="top-navbar__active-user-container">
      <button
        class="action-button top-navbar__active-user-container__user-icon"
        @click="onUserIconClick"
      >
        {{ userStore.userEmail.slice(0, 2).toUpperCase() }}
      </button>
      <div class="top-navbar__active-user-container__user-options-dropdown" v-if="showUserDropdown">
        <button
          class="top-navbar__active-user-container__user-options-dropdown__option"
          @click="onLogoutButtonClick"
        >
          <Icon icon="material-symbols:logout" /> Log out
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.top-navbar {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 1rem;
  left: 7rem;
  right: 0rem;
  z-index: 5;

  &__log-in-buttons {
    padding-right: 1rem;
    display: flex;
    gap: 1rem;
  }

  &__active-user-container {
    position: relative;

    &__user-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      padding: 0;
      margin-right: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    &__user-options-dropdown {
      width: 10rem;
      background-color: main.$beige;
      position: absolute;
      right: 1rem;
      top: 3.5rem;
      padding: 0.3rem;
      border-radius: 0.25rem;

      &__option {
        width: 100%;
        background: none;
        border: none;
        font-size: 1rem;
        font-family: 'Roboto';
        display: flex;
        align-items: center;
        gap: 0.25rem;
        border-radius: 0.2rem;
        cursor: pointer;
        padding: 0.5rem 0 0.5rem 0.5rem;

        &:hover {
          background-color: main.$light-grey-3;
        }
      }
    }
  }
}
</style>
