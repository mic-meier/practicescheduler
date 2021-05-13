import { createSchema } from '@keystone-next/keystone/schema'

import { PracticeRoutine } from './schemas/PracticeRoutine'
import { User } from './schemas/User'

export const lists = createSchema({
  User,
  PracticeRoutine,
})
