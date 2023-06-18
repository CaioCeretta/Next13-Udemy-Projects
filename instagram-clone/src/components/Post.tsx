import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

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

      <img className="obj.cover w-full" src={img} alt="" />

      {/* Post Button */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post comments */}
      <p className="truncate p-5">
        <span className="pr-2 font-bold">{username}</span>
        <span className="truncate">{caption}</span>
      </p>

      {/* Post input box */}
      <div className="flex items-center p-4">
        <FaceSmileIcon className="btn" />
        <input
          className="flex-1  border-none outline-none focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button className="font-medium text-blue-400 ">Post</button>
      </div>
    </div>
  )
}
