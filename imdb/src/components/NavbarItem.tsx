'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

interface NavbarItemProps {
  title: string
  param: string
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  return (
    <div className="py-3">
      <Link
        href={`/?genre=${param}`}
        className={`font-semi-bold mx-4 p-2 hover:text-amber-600 ${
          genre &&
          genre === param &&
          'rounded-lg underline decoration-amber-500 decoration-4 underline-offset-8'
        }`}
      >
        <span className=" text-lg">{title}</span>
      </Link>
      <span></span>
    </div>
  )
}
