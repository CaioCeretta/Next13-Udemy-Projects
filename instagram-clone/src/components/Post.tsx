interface PostProps {
  post: {
    username: string
    img: string
    userImg: string
    caption: string
  }
}

export default function Post({ post: { username, img, caption } }: PostProps) {
  return (
    <div>
      <p>{username}</p>
      <img src={img} alt="" />
      <p>{caption}</p>
    </div>
  )
}
