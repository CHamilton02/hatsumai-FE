import { axiosInstance } from '@/api/config'
import type { User } from '@/types/services/Login'

export async function loginService(user: User) {
  const userToken = await axiosInstance.post<string>('/user/login', user)
  return userToken.data
}

export async function registerService(user: User) {
  await axiosInstance.post<string>('/user/register', user)
}
