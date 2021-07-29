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
    const signingKey = key.getPublicKey()
    callback(null, signingKey)
  })
}

// TODO: return types
async function isTokenValid(token: string | undefined) {
  if (token) {
    const bearerToken = token.split(' ')

    const result = new Promise((resolve, reject) => {
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

  return { error: 'No token provided' }
}

export default isTokenValid