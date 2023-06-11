import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className="flex items-center">
      <Image
        width={72}
        height={96}
        className="h-96"
        src="/spinner.svg"
        alt="loading circle"
      />
    </div>
  )
}
