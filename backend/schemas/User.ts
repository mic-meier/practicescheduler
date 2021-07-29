import { checkbox, password, relationship, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

export const User = list({
  ui: {
    listView: {
      initialColumns: ['name', 'routines'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
    isAdmin: checkbox(),
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
