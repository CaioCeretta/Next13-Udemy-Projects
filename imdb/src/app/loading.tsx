import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className="flex items-center">
      <Image className="h-96" src="spinner.svg" alt="loading circle" />
    </div>
  )
}
