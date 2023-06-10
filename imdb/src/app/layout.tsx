import './globals.css'

import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* Search Box */}

          {children}
        </Providers>
      </body>
    </html>
  )
}
