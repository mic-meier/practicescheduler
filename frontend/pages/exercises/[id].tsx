import { apiEndpoint } from 'config'
import { gql, request } from 'graphql-request'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

const SINGLE_EXERCISE_QUERY = gql`
  query SINGLE_EXERCISE_QUERY($id: ID!) {
    Exercise(where: { id: $id }) {
      id
      name
      slug
      description
      category
      duration
      notes
      createdAt
      updatedAt
    }
  }
`

const useExercise = (exerciseID: number) => {
  return useQuery(['exercise', exerciseID], async () => {
    const data = await request(apiEndpoint, SINGLE_EXERCISE_QUERY, {
      id: exerciseID,
    })
    return data.Exercise
  })
}

const ExerciseDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data: exercise, isLoading, isError, error } = useExercise(Number(id))

  // if (!exercise) return null

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      {exercise ? (
        <div>
          <h1 className="text-7xl">Exercise Detail Page: {id} </h1>
          <h2>{exercise.name}</h2>
          <div>{exercise.description}</div>
          <div>{exercise.notes}</div>
          <div>{exercise.category}</div>
          <div>{exercise.duration / 60} minutes</div>
        </div>
      ) : null}
    </div>
  )
}

export default ExerciseDetailsPage
