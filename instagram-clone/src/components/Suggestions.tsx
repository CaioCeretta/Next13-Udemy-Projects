'use client'

import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker'

interface SuggestionsArray {
  username: string
  jobTitle: string
  img: string
  id: number
}

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState<SuggestionsArray[]>([])
  console.log(suggestions)

  useEffect(() => {
    const suggestionsArr = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }))

    setSuggestions(suggestionsArr)
  }, [])

  return (
    <div className="ml-10 mt-4">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      <div className="">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="mt-3 flex items-center justify-between"
          >
            <img
              className="h-10 rounded-full border p-[2px]"
              src={suggestion.img}
              alt={suggestion.username}
            />
            <div className="hover: ml-4 flex-1">
              <h2 className="text-sm font-semibold">{suggestion.username}</h2>
              <h3 className="max-w-[230px] truncate text-sm text-gray-400">
                {suggestion.jobTitle}
              </h3>
            </div>
            <button className="semibold text-sm text-blue-400">Follow</button>
          </div>
        ))}
      </div>
    </div>
  )
}
