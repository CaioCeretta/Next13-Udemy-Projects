'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'

export default function HomeSearch() {
  const [input, setInput] = useState('')
  const [randomSearchLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log(input)

    if (!input.trim()) return

    router.push(`/search/web?searchTerm=${input}`)
  }

  async function randomSearch(e: FormEvent) {
    setRandomSearchLoading(true)
    e.preventDefault()

    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0])

    if (!response) {
      return false
    }

    router.push(`/search/web?searchTerm=${response}`)
    setRandomSearchLoading(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 flex w-full max-w-[90%] rounded-full border border-gray-200 px-3  py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl "
      >
        <AiOutlineSearch className="text-xl text-gray-500" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-[720px] flex-grow rounded-full  pl-3 focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>

      <div className="mt-8 flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button onClick={handleSubmit} className="btn ">
          Google Search
        </button>

        <button
          onClick={randomSearch}
          className="btn disabled:opacity-0.8 flex items-center  justify-center"
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img
              src="/spinner.svg"
              alt="Loading..."
              className="h-6 text-center"
            />
          ) : (
            'I Am Feeling Lucky'
          )}
        </button>
      </div>
    </>
  )
}
