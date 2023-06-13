'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

export default function SearchBox() {
  const [search, setSearch] = useState('')

  const router = useRouter()

  function handleSubmitSearch(e: FormEvent) {
    e.preventDefault()

    router.push(`/search/${search}`)
  }

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="mx-auto flex max-w-5xl items-center sm:px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Keywords..."
        className="h-14 w-full flex-1 rounded-sm bg-transparent placeholder-gray-400 outline-none"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  )
}
