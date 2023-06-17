'use client'

import minifaker from 'minifaker'
import 'minifaker/locales/en'
import { useEffect, useState } from 'react'
import Story from './Story'

interface StoryUser {
  id: number
  username: string
  img: string
}

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState<StoryUser[]>([])

  useEffect(() => {
    const storiesUser = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }))

    setStoryUsers(storiesUser)
  }, [])
  return (
    <div className="flex space-x-3 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-none">
      {storyUsers.map((user) => (
        <Story key={user.id} user={user} />
      ))}
    </div>
  )
}
