import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { apiEndpoint } from 'config'
import { gql, request } from 'graphql-request'
import { calculateRoutineDuration } from 'lib'
import Link from 'next/link'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { Routine } from 'types'

type RoutineCardProps = {
  routine: Routine
}

export const ALL_ROUTINES_QUERY = gql`
  query allRoutines {
    allRoutines {
      id
      name
      slug
      description
      notes
      createdAt
      updatedAt
      user {
        id
        name
      }
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

async function getRoutines() {
  const data = await request(apiEndpoint, ALL_ROUTINES_QUERY)
  return data.allRoutines
}

const RoutineCard = ({ routine }: RoutineCardProps) => {
  const { name, id, exercises } = routine

  const routineDuration = calculateRoutineDuration(exercises)

  return (
    <div className="p=10 m-10 bg-purple-300 ">
      <h2>
        <Link href={`routines/${id}`}>{name}</Link>
      </h2>
      <p>Description</p>
      {exercises.length === 1 ? (
        <p>1 exercise</p>
      ) : (
        <p>{exercises.length} exercises</p>
      )}
      <p>{routineDuration} minutes</p>
    </div>
  )
}

const RoutinesPage = () => {
  const {
    data: routines,
    isLoading,
    isError,
    error,
  } = useQuery<Routine[]>('routines', getRoutines)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <h1 className="text-7xl">Routines Page</h1>
      {routines
        ? routines.map((routine) => (
            <RoutineCard key={routine.id} routine={routine} />
          ))
        : null}
    </div>
  )
}

export default RoutinesPage

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery('routines', getRoutines)

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  },
})
