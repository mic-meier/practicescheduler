import { apiEndpoint } from 'config'
import { gql, request } from 'graphql-request'
import { calculateRoutineDuration } from 'lib'
import { useRouter } from 'next/router'
import { ExerciseCard } from 'pages/exercises'
import { useQuery } from 'react-query'

const SINGLE_ROUTINE_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Routine(where: { id: $id }) {
      id
      name
      slug
      description
      notes
      createdAt
      updatedAt
      exercises {
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
  }
`

const useRoutine = (routineID: number) => {
  return useQuery(['routine', routineID], async () => {
    const data = await request(apiEndpoint, SINGLE_ROUTINE_QUERY, {
      id: routineID,
    })
    return data.Routine
  })
}

const RoutineDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  const { data: routine, isLoading, isError, error } = useRoutine(Number(id))

  const routineDuration = calculateRoutineDuration(routine?.exercises)

  return (
    <div>
      <h1 className="text-7xl">Routine Detail Page: {id} </h1>
      {routine ? (
        <div>
          <h2>{routine.name}</h2>
          <p>{routine.description}</p>
          <p>{routine.notes}</p>
          <p>{routineDuration} minutes</p>
          <div>
            {routine.exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      Test
    </div>
  )
}

export default RoutineDetailsPage
