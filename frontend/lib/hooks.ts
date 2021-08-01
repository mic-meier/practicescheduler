import { useQuery } from 'react-query'

export const fetchApiResponse = async (route: string) => {
  const response = await fetch(`/api/${route}`)
  if (!response.ok) {
    throw new Error('Fetch request not ok')
  }
  return response.json()
}
export const useApi = (queryKey: string, route: string) => {
  return useQuery(queryKey, async () => {
    const data = await fetchApiResponse(route)
    return data
  })
}
