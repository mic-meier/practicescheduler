import { relationship, text, timestamp } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

import validateListAccess from '../lib/validateListAccess'

export const Routine = list({
  access: async ({ context, session }) =>
    await validateListAccess(context, session),
  ui: {
    listView: {
      initialColumns: ['name', 'user'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    notes: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    createdAt: timestamp({
      defaultValue: () => new Date().toUTCString(),
    }),
    updatedAt: timestamp(),
    user: relationship({ ref: 'User.routines' }),
    exercises: relationship({ ref: 'Exercise.routines', many: true }),
  },
})
