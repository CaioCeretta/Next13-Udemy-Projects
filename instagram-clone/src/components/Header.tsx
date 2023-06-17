import Image from 'next/image'
import React from 'react'
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className="z-index-30 sticky top-0 border-b bg-white shadow-sm ">
      <div className="mx-4 flex max-w-6xl flex-row items-center justify-between xl:mx-auto">
        {/* Left */}
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image
            fill
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="relative h-24 w-10 cursor-pointer lg:hidden">
          <Image
            fill
            src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-windows-phone-all-you-need-know-9.png"
            alt="logo"
            className="object-contain"
          />
        </div>
        {/* Mid */}
        <div className="relative">
          <div className="absolute top-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="rounded-md border-gray-500 bg-gray-50 pl-10 text-sm focus:ring-black"
          />
          <p></p>
        </div>
        {/* {Right} */}
        <div className="flex items-center space-x-4">
          <HomeIcon className="hidden h-6 cursor-pointer transition-transform duration-200 ease-out hover:scale-125 md:inline" />
          <PlusCircleIcon className="h-6 cursor-pointer transition-transform duration-200 ease-out hover:scale-125" />
          <img
            className="h-10 cursor-pointer rounded-full"
            src="https://images.mubicdn.net/images/cast_member/28156/cache-4095-1478101707/image-w856.jpg?size=800x"
            alt="eu"
          />
        </div>
      </div>
    </header>
  )
}
