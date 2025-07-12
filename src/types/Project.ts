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
