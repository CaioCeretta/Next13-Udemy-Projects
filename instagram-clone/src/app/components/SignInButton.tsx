'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

export default function SignInButton() {
  const { data: session } = useSession()
  console.log(session?.user)

  if (session && session.user) {
    return (
      <div className="ml-auto flex gap-4">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }

  // Google
  return <button onClick={() => signIn('google')}>Sign In</button>

  // Credentials

  // return (
  //  <button onClick={() => signIn('credentials')} className="ml-auto text-green-600">
  //     Sign In
  //   </button>
  // )
}
