import { useUserStore } from '@/stores/user'
import axios from 'axios'

const userStore = useUserStore()

export const axiosInstance = axios.create({
  baseURL: 'localhost:8080',
  headers: { Authorization: userStore.userToken },
})
