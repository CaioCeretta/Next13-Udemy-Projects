import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header>
      {/* Left */}

      <div className="flex max-w-6xl flex-row items-center justify-between">
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

        {/* Middle */}
        {/* {Right} */}
        <div>Right Side</div>
      </div>
    </header>
  )
}
