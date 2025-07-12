import { axiosInstance } from '@/api/config'
import type { TopTenProjectTopicsAPIResponse } from '@/types/Project'

export async function getTopTenProjectTopicsService() {
  const topTenProjectTopics =
    await axiosInstance.get<TopTenProjectTopicsAPIResponse>('/project/topics')
  return topTenProjectTopics.data
}
