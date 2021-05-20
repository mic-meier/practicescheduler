import { password, relationship, text } from '@keystone-next/fields'
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
    routines: relationship({
      ref: 'PracticeRoutine.user',
      many: true,
      ui: {
        displayMode: 'select',
      },
    }),
  },
})
