import { createAuth } from '@keystone-next/auth'
import { config } from '@keystone-next/keystone/schema'
import { statelessSessions } from '@keystone-next/keystone/session'

import { lists } from './schema'

let sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    )
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --'
  }
}

const sessionMaxAge = 60 * 60 * 24 * 30 // 30 days

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'name',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
})

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
})

export default withAuth(
  config({
    server: {
      port: 3001,
      cors: { origin: ['http://localhost:3000'] },
    },
    db: {
      adapter: 'prisma_postgresql',
      url:
        process.env.DATABASE_URL ||
        'postgres://practiceschedule:WY86jZ.rihRrx@mBhGdfa-6KWrkWuoP*rnuVDR-gpvBm-@localhost/practiceschedule',
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
)
