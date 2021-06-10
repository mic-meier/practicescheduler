import { Exercise, Routine } from 'types'

export const routines: Routine[] = [
  {
    id: '2',
    name: 'Test Routine 1',
    slug: '52bfe8e4-c53f-45a7-87d5-9dd862fce119',
    description: 'asdgasgafhseg',
    notes: 'efgshsrthrth',
    createdAt: '2021-06-08T17:38:55.000Z',
    exercises: [
      {
        id: '11',
        name: 'Spider',
        slug: 'c10434dc-fd1f-4a50-82f3-987a59b43483',
        description: null,
        category: 'technique',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:49:58.000Z',
      },
      {
        id: '13',
        name: 'E Shape Barre Chord',
        slug: 'bc213fc3-d6a1-41d5-81a2-5348f6bb7665',
        description: null,
        category: 'theory',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:50:48.000Z',
      },
    ],
  },
  {
    id: '3',
    name: 'Test Routine 2',
    slug: '59f9a655-b0df-4a27-a7e3-e191b4f432ae',
    description: 'asd',
    notes: 'afgaefgegfgrtjrtrty',
    createdAt: '2021-06-08T17:39:20.000Z',

    exercises: [
      {
        id: '11',
        name: 'Spider',
        slug: 'c10434dc-fd1f-4a50-82f3-987a59b43483',
        description: null,
        category: 'technique',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:49:58.000Z',
      },
      {
        id: '12',
        name: 'Finger Gym',
        slug: 'a9bff0bd-7d8a-4d7e-86d8-fe6517086b08',
        description: null,
        category: 'technique',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:50:17.000Z',
      },
      {
        id: '13',
        name: 'E Shape Barre Chord',
        slug: 'bc213fc3-d6a1-41d5-81a2-5348f6bb7665',
        description: null,
        category: 'theory',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:50:48.000Z',
      },
      {
        id: '14',
        name: 'Never Going Back Again',
        slug: '3a36b656-9f0c-41fc-9a5c-7c29a4e3f7cd',
        description: null,
        category: 'repertoire',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:51:14.000Z',
      },
      {
        id: '15',
        name: 'Perfect 5th',
        slug: '38b5ef35-1731-4726-a77f-a3c198e0780f',
        description: null,
        category: 'earTraining',
        duration: 300,
        notes: null,
        createdAt: '2021-06-07T17:51:35.000Z',
      },
    ],
  },
]

export const exercises: Exercise[] = [
  {
    id: '11',
    name: 'Spider',
    slug: 'c10434dc-fd1f-4a50-82f3-987a59b43483',
    description: 'sdfasf',
    category: 'technique',
    duration: 300,
    notes: 'asdfadsfasdf',
    createdAt: '2021-06-07T17:49:58.000Z',
  },
  {
    id: '12',
    name: 'Finger Gym',
    slug: 'a9bff0bd-7d8a-4d7e-86d8-fe6517086b08',
    description: null,
    category: 'technique',
    duration: 300,
    notes: null,
    createdAt: '2021-06-07T17:50:17.000Z',
  },
  {
    id: '13',
    name: 'E Shape Barre Chord',
    slug: 'bc213fc3-d6a1-41d5-81a2-5348f6bb7665',
    description: null,
    category: 'theory',
    duration: 300,
    notes: null,
    createdAt: '2021-06-07T17:50:48.000Z',
  },
  {
    id: '14',
    name: 'Never Going Back Again',
    slug: '3a36b656-9f0c-41fc-9a5c-7c29a4e3f7cd',
    description: null,
    category: 'repertoire',
    duration: 300,
    notes: null,
    createdAt: '2021-06-07T17:51:14.000Z',
  },
  {
    id: '15',
    name: 'Perfect 5th',
    slug: '38b5ef35-1731-4726-a77f-a3c198e0780f',
    description: null,
    category: 'earTraining',
    duration: 300,
    notes: null,
    createdAt: '2021-06-07T17:51:35.000Z',
  },
]
