import { routines } from 'dummyData'
import { calculateRoutineDuration } from 'lib'
import Link from 'next/link'
import { Routine } from 'types'

type RoutineCardProps = {
  routine: Routine
}

const RoutineCard = ({ routine }: RoutineCardProps) => {
  const { name, slug, exercises } = routine

  const routineDuration = calculateRoutineDuration(exercises)

  return (
    <div className="p=10 m-10 bg-purple-300 ">
      <h2>
        <Link href={`routines/${slug}`}>{name}</Link>
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
  return (
    <div>
      <h1 className="text-7xl">Routines Page</h1>
      {routines.map((routine) => (
        <RoutineCard key={routine.id} routine={routine} />
      ))}
    </div>
  )
}

export default RoutinesPage
