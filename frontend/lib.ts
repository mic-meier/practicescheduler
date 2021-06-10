import { Exercise } from 'types'

export const calculateRoutineDuration = (exercises: Exercise[] | undefined) => {
  if (!exercises) return 0
  return (
    exercises
      .map((exercise) => exercise.duration)
      .reduce((acc, current) => acc + current) / 60
  )
}
