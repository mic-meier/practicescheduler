import { relationship, text } from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'

export const PracticeRoutine = list({
  ui: {
    listView: {
      initialColumns: ['name', 'user'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    user: relationship({ ref: 'User.routines' }),
  },
})
