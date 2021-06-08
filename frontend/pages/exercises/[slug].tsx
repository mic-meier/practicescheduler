import { useRouter } from 'next/router'

const ExerciseDetailsPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h1 className="text-7xl">Exercise Detail Page: {slug} </h1>
}

export default ExerciseDetailsPage
