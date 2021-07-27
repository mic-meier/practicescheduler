import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { exercises } from 'dummyData'
import Link from 'next/link'
import { Exercise } from 'types'

type ExerciseCardProps = {
  exercise: Exercise
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="p-4 m-4 bg-pink-400">
      <Link href={`/exercises/${exercise.slug}`}>
        <h2>{exercise.name}</h2>
      </Link>
      <div>{exercise.category}</div>
      <div>{exercise.duration / 60} minutes</div>
    </div>
  )
}

const ExercisesPage = () => {
  return (
    <div className="h-full">
      <h1 className="text-7xl">Exercises Page</h1>
      <div className="max-w-xs max-h-screen justify-center overflow-auto bg-yellow-300">
        <div>
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}

          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}

          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExercisesPage

export const getServerSideProps = withPageAuthRequired()
