import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'

import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  const logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'

  return (
    <header className="sticky top-0 bg-white">
      <div className="width-full padding-6 flex items-center justify-between">
        <Link href={'/'}>
          <Image src={logo} width={120} height={40} alt="logo" />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>

        <div className="hidden space-x-2 md:inline-flex">
          <RiSettings3Line className="header-icon" />

          <TbGridDots className="header-icon" />
        </div>
        <button className="ml-2 rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-shadow hover:shadow-md hover:brightness-105">
          Sign In
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
