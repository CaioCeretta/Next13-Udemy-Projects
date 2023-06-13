import Results from '@/components/Results'

interface Params {
  params: {
    search: string
  }
}

export default async function SeachResults({ params: { search } }: Params) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${search}&language=en-US&page=1`,
  )
  console.log(res)

  if (!res.ok) {
    throw new Error('No movie was found ')
  }

  const data = await res.json()

  const results = data.results

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="pt-6 text-center">No results </h1>
      )}

      <Results results={results} />
    </div>
  )
}
