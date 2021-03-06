import { relationship, text, timestamp } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'
import { v4 as uuidv4 } from 'uuid'

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
    slug: text({
      defaultValue: () => uuidv4(),
      ui: {
        createView: {
          fieldMode: 'hidden',
        },
      },
    }),
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
