import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>El Mayo&apos;s Next.js + Tailwind starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-7xl">
            Welcome to{' '}
            <a href="https://github.com/mic-meier" className="mx-auto">
              El Mayo&apos;s
            </a>{' '}
            next.js starter
          </h1>
        </div>
      </main>
    </div>
  )
}
