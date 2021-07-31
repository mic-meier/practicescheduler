import type { KeystoneContext } from '@keystone-next/types'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

dotenv.config()

const client = jwksClient({
  jwksUri: `
  ${process.env.AUTH0_DOMAIN}.well-known/jwks.json`,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getKey(header: any, callback: any) {
  client.getSigningKey(header.kid, function (error, key) {
    let signingKey: string
    if (key === undefined) {
      signingKey = ''
    } else {
      signingKey = key.getPublicKey()
    }
    callback(null, signingKey)
  })
}

// TODO: return types
export async function isTokenValid(token: string | undefined) {
  if (token) {
    const bearerToken = token.split(' ')

    const result = new Promise((resolve) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: process.env.API_IDENTIFIER,
          issuer: process.env.AUTH0_DOMAIN,
          algorithms: ['RS256'],
        },
        (error, decoded) => {
          if (error) {
            resolve({ error })
          }
          if (decoded) {
            resolve({ decoded })
          }
        }
      )
    })
    return result
  }

  return { error: { message: 'No token provided' } }
}

const userHasAccess = async (context: KeystoneContext, session: unknown) => {
  if (!session) {
    const token = context?.req?.headers.authorization
    const { error } = await isTokenValid(token)

    if (error) {
      console.error('TokenValidationError: ', error.message)
      return false
    }
    return true
  }

  if (session) {
    return true
  }
}

export default userHasAccess
