import { axiosInstance } from '@/api/config'
import type { User } from '@/types/User'

export async function loginService(user: User) {
  const userToken = await axiosInstance.post<{ token: string }>('/user/login', user)
  return userToken.data
}

export async function registerService(user: User) {
  await axiosInstance.post<string>('/user/register', user)
}

export async function forgotPasswordService(email: string) {
  await axiosInstance.post<string>('/user/forgot-password', { email })
}
