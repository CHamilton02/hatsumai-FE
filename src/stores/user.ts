import type { User } from '@/types/User'
import { defineStore } from 'pinia'
import { forgotPasswordService, loginService, registerService } from '../services/userService'
import axios from 'axios'
import router from '@/router'
import { ref } from 'vue'
import { axiosInstance } from '@/api/config'
import { EmailDoesNotExistError, ExistingPasswordResetRequest } from '@/types/errors/User'

export const useUserStore = defineStore('userStore', () => {
  const userEmail = ref('')

  async function login(user: User) {
    try {
      axiosInstance.defaults.headers.common['Authorization'] = (await loginService(user)).token
      userEmail.value = user.email
      router.push('/generate')
    } catch (error) {
      if (axios.isAxiosError(error) && error.status) {
        throw new Error('Incorrect email or password. Please try again.')
      }
      throw new Error('Failed to log in. Please try again later.')
    }
  }

  async function register(user: User) {
    try {
      await registerService(user)
      await login(user)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data.error === 'Email already exists') {
        throw new Error('Email already exists. Please log in or try a different email.')
      }
      throw new Error('Failed to sign up. Please try again later.')
    }
  }

  async function forgotPassword(email: string) {
    try {
      await forgotPasswordService(email)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data.error === 'Email does not exist.') {
        throw new EmailDoesNotExistError('There does not exist an account with this email.')
      } else if (
        axios.isAxiosError(error) &&
        error.response?.data.error === 'There is an existing password reset request.'
      ) {
        throw new ExistingPasswordResetRequest(
          'There is an existing password reset request. Please check your spam or try again in 10 minutes.',
        )
      }
      throw new Error()
    }
  }

  function logout() {
    axiosInstance.defaults.headers.common['Authorization'] = ''
    userEmail.value = ''
    router.push('/login')
  }

  return {
    userEmail,
    login,
    register,
    logout,
    forgotPassword,
  }
})
