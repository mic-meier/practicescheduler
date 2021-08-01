import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { apiEndpoint } from 'config'
import { gql, GraphQLClient } from 'graphql-request'

export const ALL_EXERCISES_QUERY = gql`
  query allExercises {
    allExercises {
      name
      description
      duration
      notes
      createdAt
    }
  }
`

async function getExercises(token: string | undefined) {
  const graphQLClient = new GraphQLClient(apiEndpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const data = await graphQLClient.request(ALL_EXERCISES_QUERY)
  return data.allExercises
}

export default withApiAuthRequired(async function exercises(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res)
    const response = await getExercises(accessToken)
    console.log(response)
    res.json(response)
  } catch (error) {
    console.error('Error: ', error)
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    })
  }
})
