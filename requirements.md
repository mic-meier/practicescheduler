```js
user {}

exercise = {
  id: id,
  slug: uuid,
  name: string,
  description: string,
  category: 'Technique' | 'Theory' | 'Ear Training' |'Repertoire',
  duration: integer,
  notes: string,
  user: reference to user,
  created_at: date,
  updated_at: date }

routine = {
  id: id,
  slug: uuid,
  name: string,
  description: string,
  notes: string,
  exercises: \[exercises],
  creator: reference to user,
  created_at: date,
  updated_at: date }
```

## User stories

---

- User goes to homepage /
- User is prompted to register or login
- User registers or logs in
- User is redirected to their profile page /profile

- User clicks create new practice schedule
- User goes to /create
- User can create Routine with practiceItems
- User saves routine
- User is redirected to created routine /routines/\[slug]

- User goes to practiceRoutine they created
- User clicks an edit button that lets them edit the routine
- User clicks delete button that lets them delete a routine

## Tech Stack

---

- React-Query
- Formik
- Yup (for form validation)
- Tailwind
- Keystone
- Headless UI
- Drag Drop?

## Tickets

---

1. Scaffold out initial pages

   - Create nav to navigate to relevant pages
   - Create pages:
     - /
     - /profile
     - /exercices
     - /exercises/:slug
     - /routines
     - /routines/:slug

2. Scaffold out pages with dummy data

   - /profile
   - /exercices
   - /exercises/:slug
   - /routines
   - /routines/:slug

3. Add support for user login

   - If user goes to / and isn't logged in prompt to register / log in
   - Only show full nav when user is logged in
   - If user isn't logged in and they go to /profile redirect to /
   - If user isn't logged in and they go to /routines redirect to /
   - If user isn't logged in and goes to /exercises redirect to /
   - If user isn't logged in and goes to /routines/:slug redirect to /

4. Add keystone.js and replace dummy data of frontend with data from database

   - Create schema for User
   - Create schema for Exercise
   - Create schema for Routine

5. Add basic support for creating a new exercise

   - Add react-query
   - Add Formik and Yup
   - Add menu button to create a new exercise (or make functional)
   - Create form to create exercise (modal form)
   - Add error handling
   - On success go to /exercises/:slug

6. Add support to display all exercises

   - User is logged in and navigates to /exercise to see a list of all their
     practice routines
   - User sees name, category and duration of each exercise
   - Add support to filter exercises by category
   - Add support to sort exercises by:
     - Name
     - Date added
   - User clicks on exercise and goes to /exercise/:slug

7. Add support to edit an exercise

   - Add edit button to exercise card
   - Clicking edit button allows user to edit exercise
   - Add delete button to exercise card
   - Clicking delete button asks user to confirm if exercise should be deleted
   - Exercise must be deleted from all practice routines that include it

8. Add basic support to create a practice routine with existing exercises

   - Add menu button to create a new practice routine (or make functional)
   - Create form to create practice routine
   - On success go to routines/:slug

9. Display all practice routines

   - User is logged in and navigates to /routines to see a list of all their
     practice routines
   - User sees name and total duration of each practice routine
   - User clicks on practice routine and goes to /routines/:slug

10. Display a single practice routine

    - User goes to /routines/:slug
    - Routine displays total duration
    - Routine groups exercises by category
    - Optional:
      - Exercises should be rearrangable within category by drag and drop
      - Categories should be rearrangable by drag and drop

11. Add support for editing a practice routine from /routines/:slug

    - Add support to add exercises
    - Add support to remove exercises
    - Add support to change name, description, notes of practice routine
    - Add support to delete practice routine

12. Style app using tailwind

13. Deploy
