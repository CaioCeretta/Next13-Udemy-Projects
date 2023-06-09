import Head from 'next/head';

export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div>
        <h1 className='text-red-900 font-san s'>Home</h1>
      </div>
    </main>
  )
}
