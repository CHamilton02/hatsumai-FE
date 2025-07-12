import { axiosInstance } from '@/api/config'
import {
  type PreviousProjectIdea,
  type GenerateProjectAPIRequestBody,
  type Project,
  type TopTenProjectTopicsAPIResponse,
} from '@/types/Project'

export async function getTopTenProjectTopicsService() {
  const topTenProjectTopics =
    await axiosInstance.get<TopTenProjectTopicsAPIResponse>('/project/topics')
  return topTenProjectTopics.data
}

export async function postGenerateProjectService(
  projectRequestBody: GenerateProjectAPIRequestBody,
) {
  const generatedProjectId = await axiosInstance.post<{ projectId: number }>(
    '/project/generate',
    projectRequestBody,
    {
      headers: {
        Authorization: `${localStorage.getItem('access_token')}`,
      },
    },
  )

  return generatedProjectId.data
}

export async function getProjectByIdService(projectId: number) {
  const project = await axiosInstance.get<Project>(`/project/${projectId}`, {
    headers: {
      Authorization: `${localStorage.getItem('access_token')}`,
    },
  })
  return project.data
}

export async function getProjectHistoryService() {
  const projectHistory = await axiosInstance.get<Array<PreviousProjectIdea>>('/project/history', {
    headers: {
      Authorization: `${localStorage.getItem('access_token')}`,
    },
  })
  return projectHistory.data
}
