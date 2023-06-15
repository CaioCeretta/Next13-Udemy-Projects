'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBox() {
  const router = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!term.trim()) return

    router.push(`/search/web?searchTerm=${term}`)
  }

  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('searchTerm') // || ''

  const [term, setTerm] = useState(searchTerm || '')
  return (
    <form
      action=""
      className="ml-10 mr-5 flex max-w-3xl flex-grow items-center justify-between rounded-full border-gray-200 px-6 py-3 shadow-lg transition-shadow"
      onSubmit={handleSubmit}
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full focus:outline-none"
        type="text"
      />
      <RxCross2
        onClick={() => setTerm('')}
        className="mr-2 cursor-pointer  text-2xl text-gray-500"
      />
      <BsFillMicFill className="mr-2 hidden border-l-2 border-gray-300 pl-4 text-4xl text-blue-500 sm:inline-flex" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden cursor-pointer text-2xl text-blue-500 sm:inline-flex"
      />
    </form>
  )
}
