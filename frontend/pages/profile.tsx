import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Image from 'next/image'

const ProfilePage = () => {
  const { user, error: userError, isLoading: userIsLoading } = useUser()

  if (userIsLoading) return <div>Loading...</div>

  if (userError) return <div>{userError.message}</div>

  return (
    <div>
      <h1 className="text-7xl">Profile Page</h1>
      {user && (
        <div>
          {user.picture && user.name && (
            <Image
              src={user.picture}
              alt={user.name}
              width={500}
              height={500}
            />
          )}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  )
}

export default ProfilePage

export const getServerSideProps = withPageAuthRequired()
