'use client'

import React, { useEffect } from 'react'

interface ErrorProps {
  error: string
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])
  return (
    <div className=" mt-10 text-center">
      <h2>Something went wrong</h2>
      <button
        className="hover:text-amber-600"
        type="button"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  )
}
