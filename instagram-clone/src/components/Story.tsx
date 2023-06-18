interface UserProps {
  user: {
    username: string
    img: string
    id: number
  }
}

export default function Story({ user }: UserProps) {
  return (
    <div className="">
      <img
        src={user.img}
        className="h-14 cursor-pointer rounded-full border-2 border-red-500 object-contain  p-[1.5px] transition-transform hover:scale-110"
        alt={user.username}
      />
      <p className="text-x w-14 truncate">{user.username}</p>
    </div>
  )
}
