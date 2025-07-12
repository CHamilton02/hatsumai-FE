export interface Project {
  title: string
  description: string
  tips: Array<string>
}

export interface PreviousProjectIdea {
  id: number
  title: string
  description: string
  topics: Array<string>
}

export enum DifficultyLevel {
  Beginner = '🐣 Beginner',
  Intermediate = '💪 Intermediate',
  Advanced = '🧠 Advanced',
}

export interface Topic {
  topic: string
  checked: boolean
}

export interface TopTenProjectTopicsAPIResponse {
  projectTopics: Array<string>
}

export interface GenerateProjectAPIRequestBody {
  topics: Array<string>
  description: string
  difficulty: DifficultyLevel
}
