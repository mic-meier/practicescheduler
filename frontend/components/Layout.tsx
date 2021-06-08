import Head from 'next/head'
import Link from 'next/link'

type Props = {
  title: string
  children: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex bg-gray-200">
        <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
          <div className="h-16 flex items-center w-full">
            <Link href="/">
              <a className="h-6 w-6 mx-auto">
                <img
                  className="h-6 w-6 mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                  alt="svelte logo"
                />
              </a>
            </Link>
          </div>

          <ul>
            <li className="hover:bg-gray-100">
              <Link href="/profile">
                <a
                  className="h-16 px-6 flx flex justify-center items-center w-full
					focus:text-orange-500"
                >
                  Profile
                </a>
              </Link>
            </li>
            <li className="hover:bg-gray-100">
              <Link href="/exercises">
                <a
                  className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
                >
                  Exercises
                </a>
              </Link>
            </li>

            <li className="hover:bg-gray-100">
              <Link href="/routines">
                <a
                  className="h-16 px-6 flex  justify-center items-center w-full
					focus:text-orange-500"
                >
                  Routines
                </a>
              </Link>
            </li>
          </ul>

          <div className="mt-auto h-16 flex items-center w-full">
            <button
              className="h-16  mx-auto  flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >
              <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </aside>
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
