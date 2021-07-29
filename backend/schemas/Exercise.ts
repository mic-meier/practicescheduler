import {
  integer,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-next/fields'
import { list } from '@keystone-next/keystone/schema'
import { v4 as uuidv4 } from 'uuid'

import isTokenValid from '../validate'

export const Exercise = list({
  access: async ({ context, session }) => {
    const token = context?.req?.headers.authorization
    const { isAdmin } = await context.db.lists.User.findOne({
      where: { id: session.itemId },
    })
    const result = await isTokenValid(token)
    return isAdmin || !result.error
  },
  ui: {
    listView: {
      initialColumns: ['name', 'slug', 'category', 'duration', 'user'],
    },
  },
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    slug: text({
      isRequired: true,
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
    category: select({
      dataType: 'enum',
      options: [
        { label: 'Technique', value: 'technique' },
        { label: 'Theory', value: 'theory' },
        { label: 'Ear Training', value: 'earTraining' },
        { label: 'Repertoire', value: 'repertoire' },
      ],
      isRequired: true,
    }),
    duration: integer({
      defaultValue: 300, // 5 minutes
      isRequired: true,
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
    user: relationship({ ref: 'User.exercises' }),
    routines: relationship({ ref: 'Routine.exercises', many: true }),
  },
})
