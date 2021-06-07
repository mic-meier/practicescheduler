import { createSchema } from '@keystone-next/keystone/schema'

import { Exercise } from './schemas/Exercise'
import { Routine } from './schemas/Routine'
import { User } from './schemas/User'

export const lists = createSchema({
  User,
  Routine,
  Exercise,
})
