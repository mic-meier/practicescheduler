import { password, relationship, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

import validateListAccess from '../lib/validateListAccess'

export const User = list({
  access: async ({ context, session }) =>
    await validateListAccess(context, session),
  ui: {
    listView: {
      initialColumns: ['name', 'routines'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
    exercises: relationship({
      ref: 'Exercise.user',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
    routines: relationship({
      ref: 'Routine.user',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
  },
})
