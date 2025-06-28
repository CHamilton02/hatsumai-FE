import type { User } from '@/types/services/Login'
import { defineStore } from 'pinia'
import { loginService, registerService } from '../services/userService'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const userToken = ref('')

  async function login(user: User) {
    try {
      userToken.value = await loginService(user)
    } catch {
      console.error('Failed to log in,')
      throw new Error()
    }
  }

  async function register(user: User) {
    try {
      await registerService(user)
    } catch {
      console.error('Failed to register.')
      throw new Error()
    }
  }

  return {
    userToken,
    login,
    register,
  }
})
