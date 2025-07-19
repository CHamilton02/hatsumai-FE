<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const userStore = useUserStore()
const isMobileMenuVisible = ref(false)

function onMenuIconClick() {
  isMobileMenuVisible.value = !isMobileMenuVisible.value
}

function onNavOptionClick(view: string) {
  isMobileMenuVisible.value = false
  router.push(view)
}

function onLogoutButtonClick() {
  userStore.logout()
  isMobileMenuVisible.value = false
}
</script>

<template>
  <button class="invisible-button menu-icon-button" @click="onMenuIconClick">
    <Icon
      class="menu-icon"
      :class="{ 'menu-icon--open': isMobileMenuVisible }"
      icon="material-symbols:menu-rounded"
    />
  </button>
  <div class="mobile-nav" v-if="isMobileMenuVisible">
    <div class="mobile-nav__view-options">
      <button
        class="mobile-nav__view-options__option"
        :class="{ 'mobile-nav__view-options__option--active': route.path === '/' }"
        @click="onNavOptionClick('/')"
      >
        <Icon icon="material-symbols-light:home-outline" class="nav-icon" />
        Home
      </button>
      <button
        class="mobile-nav__view-options__option"
        :class="{ 'mobile-nav__view-options__option--active': route.path === '/generate' }"
        @click="onNavOptionClick('/generate')"
      >
        <Icon icon="material-symbols-light:lightbulb-2-outline" class="nav-icon" />
        Generate
      </button>
      <button
        class="mobile-nav__view-options__option"
        :class="{ 'mobile-nav__view-options__option--active': route.path === '/history' }"
        @click="onNavOptionClick('/history')"
      >
        <Icon icon="material-symbols-light:history" class="nav-icon" />
        History
      </button>
    </div>
    <div class="mobile-nav__user-options">
      <div v-if="userStore.userEmail">
        <div class="mobile-nav__user-options__user-email">
          {{ userStore.userEmail.toUpperCase() }}
        </div>
        <button class="mobile-nav__view-options__option" @click="onLogoutButtonClick">
          <Icon icon="material-symbols:logout" /> Log out
        </button>
      </div>
      <div v-if="!userStore.userEmail">
        <button
          class="mobile-nav__view-options__option"
          :class="{ 'mobile-nav__view-options__option--active': route.path === '/login' }"
          @click="onNavOptionClick('/login')"
        >
          Log In
        </button>
        <button
          class="mobile-nav__view-options__option"
          :class="{ 'mobile-nav__view-options__option--active': route.path === '/sign-up' }"
          @click="onNavOptionClick('/sign-up')"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

.menu-icon-button {
  padding: 0;
}

.menu-icon {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: auto;
  z-index: 150;
  color: main.$navy-blue;

  &--open {
    color: white;
    transition-delay: 0.2s;
  }
}

.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: main.$navy-blue;
  z-index: 100;
  animation: slide-in 1s;

  &__view-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__option {
      width: 100%;
      text-align: center;
      padding: 1rem;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      gap: 0.5rem;
      text-decoration: none;
      background-color: main.$navy-blue;
      border: none;

      &--active {
        background-color: main.$navy-blue-2;
      }

      &:hover {
        background-color: main.$navy-blue-light;
      }
    }
  }

  &__user-options {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;

    &__user-email {
      color: white;
      width: 100%;
      text-align: center;
      font-size: 1.25rem;
    }
  }
}
</style>
