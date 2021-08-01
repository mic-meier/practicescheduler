import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useApi } from 'lib/hooks'
import Link from 'next/link'
import { Exercise } from 'types'

type ExerciseCardProps = {
  exercise: Exercise
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="p-4 m-4 bg-pink-400">
      <Link href={`/exercises/${exercise.id}`}>
        <h2>{exercise.name}</h2>
      </Link>
      <div>{exercise.category}</div>
      <div>{exercise.duration / 60} minutes</div>
    </div>
  )
}

const ExercisesPage = () => {
  const { data: exercises, isLoading } = useApi('exercises', 'exercises')

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="h-full">
      <h1 className="text-7xl">Exercises Page</h1>
      <div className="max-w-xs max-h-screen justify-center overflow-auto bg-yellow-300">
        {exercises ? (
          <div>
            {exercises.map((exercise: Exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default withPageAuthRequired(ExercisesPage)
