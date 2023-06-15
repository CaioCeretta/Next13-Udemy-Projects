'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('searchTerm')

  console.log(searchTerm)

  function selectTab(tab: string) {
    router.push(
      `/search/${tab === 'Images' ? 'images' : 'web'}?searchTerm=${searchTerm}`,
    )
  }

  return (
    <div className="flex  w-full select-none justify-center space-x-2 border-b text-sm text-gray-700 lg:justify-start lg:pl-52">
      <div
        onClick={() => selectTab('All')}
        className={`p-x-2 flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2  pb-3 active:text-blue-500 ${
          pathname === '/search/web' && '!border-blue-600 !text-blue-500'
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab('Images')}
        className={`p-x-2 flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2  pb-3 active:text-blue-500 ${
          pathname === '/search/images' && '!border-blue-600 !text-blue-500'
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  )
}
