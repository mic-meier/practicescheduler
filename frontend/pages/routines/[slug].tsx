import { useRouter } from 'next/router'

const RoutineDetailsPage = () => {
  const router = useRouter()
  const { slug } = router.query

  return <h1 className="text-7xl">Routine Detail Page: {slug} </h1>
}

export default RoutineDetailsPage
