import { routines } from 'dummyData'
import { calculateRoutineDuration } from 'lib'
import { useRouter } from 'next/router'
import { ExerciseCard } from 'pages/exercises'

const RoutineDetailsPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const routine = routines.find((routine) => routine.slug === slug)

  const routineDuration = calculateRoutineDuration(routine?.exercises)

  return (
    <div>
      <h1 className="text-7xl">Routine Detail Page: {slug} </h1>
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
    </div>
  )
}

export default RoutineDetailsPage
