import type { User } from '@/types/User'
import { defineStore } from 'pinia'
import { loginService, registerService } from '../services/userService'
import axios from 'axios'
import router from '@/router'

export const useUserStore = defineStore('userStore', () => {
  async function login(user: User) {
    try {
      localStorage.setItem('access_token', (await loginService(user)).token)
      router.push('/generate')
    } catch {
      throw new Error('Failed to log in. Please try again later.')
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
    login,
    register,
  }
})
