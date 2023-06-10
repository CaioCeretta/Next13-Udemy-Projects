import Head from 'next/head'

export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div>
        <h1 className="font-sans text-red-900">Home</h1>
      </div>
    </main>
  )
}
