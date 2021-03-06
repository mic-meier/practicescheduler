import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
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
  const { data } = useApi()
  console.log(data)

  return (
    <div className="h-full">
      <h1 className="text-7xl">Exercises Page</h1>
      {/* <div className="max-w-xs max-h-screen justify-center overflow-auto bg-yellow-300">
        {exercises ? (
          <div>
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : null}
      </div> */}
    </div>
  )
}

export default ExercisesPage

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery('exercises', getExercises)

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  },
})
