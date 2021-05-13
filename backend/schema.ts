import { createSchema } from '@keystone-next/keystone/schema'

import { User } from './schemas/User'

export const lists = createSchema({
  User,
})
