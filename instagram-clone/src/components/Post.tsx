import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

interface PostProps {
  post: {
    username: string
    img: string
    userImage: string
    caption: string
  }
}

export default function Post({
  post: { username, userImage, img, caption },
}: PostProps) {
  return (
    <div className="m-y-7  rounded-md border bg-white">
      {/* Post Header */}
      <div className="flex items-center justify-between p-5">
        <img
          className="h-12 rounded-full border border-gray-500 object-cover p-1"
          src={userImage}
          alt={username}
        />
        <p className="flex-1 p-3 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </div>

      {/* Image/Caption */}
      <div className="flex flex-col items-center">
        <img className="obj.cover w-full" src={img} alt="" />
        <p>{caption}</p>
      </div>
    </div>
  )
}
