export default function MiniProfile() {
  return (
    <div className="ml-4 mt-4 flex items-center justify-between">
      <img
        className="h-16 rounded-full border-2 p-[2px]"
        src="https://images.mubicdn.net/images/cast_member/28156/cache-4095-1478101707/image-w856.jpg?size=800x"
        alt="eu"
      />
      <div className="ml-4 flex-1">
        <h2>Chuck Norris</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign out</button>
    </div>
  )
}
