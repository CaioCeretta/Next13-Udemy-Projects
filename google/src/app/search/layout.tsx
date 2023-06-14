import SearchHeader from '@/components/SearchHeader'
import React from 'react'
import '../globals.css'

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SearchHeader />
      <main>{children}</main>
    </div>
  )
}
