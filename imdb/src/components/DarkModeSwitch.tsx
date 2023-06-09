'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'

export default function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && currentTheme === 'dark' ? (
        <MdLightMode
          className={'curson-pointer text-xl hover:text-amber-500'}
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonFill
          className={'curson-pointer text-xl hover:text-amber-500'}
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  )
}
