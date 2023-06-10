import React from 'react'

interface Result {
  adult: boolean
  id: string
  title: string
  overview: string
  release_date: string
}

interface ResultsProps {
  results: Result[]
}

export default function Results({ results }: ResultsProps) {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <p>{result.title}</p>
          </div>
        )
      })}
    </div>
  )
}
