import { exercises } from 'dummyData'
import { useRouter } from 'next/router'

const ExerciseDetailsPage = () => {
  const router = useRouter()
  const { slug } = router.query

  const exercise = exercises.find((exercise) => exercise.slug === slug)

  if (!exercise) return null

  return (
    <div>
      <h1 className="text-7xl">Exercise Detail Page: {slug} </h1>
      <h2>{exercise.name}</h2>
      <div>{exercise.description}</div>
      <div>{exercise.notes}</div>
      <div>{exercise.category}</div>
      <div>{exercise.duration / 60} minutes</div>
    </div>
  )
}

export default ExerciseDetailsPage
