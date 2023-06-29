'use client'
import Header from '@/components/Header'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="mt-20 flex justify-center space-x-7">
        <img
          className="hidden rotate-6 object-cover md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />

        <div className="">
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover"
              src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
              alt=""
            />
            <p className="my-10 text-center text-sm italic">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn('google')}
              className="rounded-lg bg-red-400 p-3 text-white hover:bg-red-500"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
