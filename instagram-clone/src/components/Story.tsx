import Image from 'next/image'
import React from 'react'

interface UserProps {
  user: {
    username: string
    img: string
    id: number
  }
}

export default function Story({ user }: UserProps) {
  return (
    <div className="flex">
      <p>{user.id}</p>
      <Image
        src={user.img}
        width={48}
        height={12}
        className="object-contain"
        alt={user.username}
      />
      <p>{user.username}</p>
    </div>
  )
}
