import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import Provider from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram Clone',
  description: 'Udemy course',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="grow">{children}</main>
        </Provider>
      </body>
    </html>
  )
}
