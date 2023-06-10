import React, { ReactElement } from 'react'
import Link from 'next/link'

interface MenuItemProps {
  title: string
  about: string
  address: string
  icon: ReactElement
}

export default function MenuItem({
  title,
  about,
  address,
  icon,
}: MenuItemProps) {
  return (
    <div>
      <Link
        className="text-2ml lg:mx-15 mx-10 hover:text-amber-600"
        href={address}
      >
        {icon}
        <p className="my-2 hidden text-sm sm:inline">{title}</p>
      </Link>
    </div>
  )
}
