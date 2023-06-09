import React, { ReactElement } from 'react'
import Link from 'next/link'

interface MenuItemProps {
  title: string;
  about: string;
  address: string;
  icon: ReactElement;
}

export default function MenuItem({title, about, address, icon}: MenuItemProps) {
  return (
    <div>
      <Link className="text-2ml mx-10 lg:mx-15 hover:text-amber-600" href={address}>
        {icon}
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>

  )
}
