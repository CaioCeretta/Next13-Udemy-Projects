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
    <div>
      {storyUsers.map((user) => (
        <Story key={user.id} user={user} />
      ))}
    </div>
  )
}
