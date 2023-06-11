import React from 'react'
import MovieCard from './MovieCard'

interface Result {
  adult: boolean
  id: string
  title: string
  overview: string
  release_date: string
  backdrop_path: string
  poster_path: string
  vote_count: number
}

interface ResultsProps {
  results: Result[]
}

export default function Results({ results }: ResultsProps) {
  console.log(results)
  return (
    <div className="padding-x-4 mx-auto max-w-6xl sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => {
        return <MovieCard key={result.id} movie={result} />
      })}
    </div>
  )
}
