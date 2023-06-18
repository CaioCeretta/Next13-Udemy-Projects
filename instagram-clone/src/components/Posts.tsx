import React from 'react'
import Post from './Post'

export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'ChuckNorris',
      userImage:
        'https://images.mubicdn.net/images/cast_member/28156/cache-4095-1478101707/image-w856.jpg?size=800x',
      img: 'https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      caption: 'terra',
    },
    {
      id: '2',
      username: 'ChuckNorris',
      userImage:
        'https://images.mubicdn.net/images/cast_member/28156/cache-4095-1478101707/image-w856.jpg?size=800x',
      img: 'https://images.unsplash.com/photo-1686903430902-1fb1b2514a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      caption: 'arvre',
    },
    {
      id: '3',
      username: 'ChuckNorris',
      userImage:
        'https://images.mubicdn.net/images/cast_member/28156/cache-4095-1478101707/image-w856.jpg?size=800x',
      img: 'https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      caption: 'carro',
    },
  ]

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
