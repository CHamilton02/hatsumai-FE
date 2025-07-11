import type { User } from '@/types/services/Login'
import { defineStore } from 'pinia'
import { loginService, registerService } from '../services/userService'
import { ref } from 'vue'
import axios from 'axios'

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
      await login(user)
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data.error === 'Email already exists') {
        throw new Error('Email already exists. Please log in or try a different email.')
      }
      throw new Error('Failed to sign up. Please try again later.')
    }
  }

  return {
    userToken,
    login,
    register,
  }
})
