export type Categories = 'technique' | 'theory' | 'earTraining' | 'repertoire'

export interface Exercise {
  id: string
  name: string
  slug: string
  description: string | null
  category: Categories
  duration: number
  notes: string | null
  createdAt: string
}

export interface Routine {
  id: string
  name: string
  slug: string
  description: string | null
  notes: string | null
  createdAt: string
  exercises: Exercise[]
}
