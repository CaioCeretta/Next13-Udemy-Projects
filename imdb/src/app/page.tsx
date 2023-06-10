import Results from '@/components/Results'
import Head from 'next/head'
const API_KEY = process.env.TMDB_KEY

interface GenreProps {
  genre: 'fetchTrending' | 'fetchTopRated'
}

interface HomeProps {
  searchParams: GenreProps
}

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || 'fetchTrending'

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&LANGUAGE=EN=us&PAGE=1`,
    { next: { revalidate: 10000 } },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  const results = data.results

  return (
    <main className="">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <div>
        <Results results={results} />
      </div>
    </main>
  )
}
