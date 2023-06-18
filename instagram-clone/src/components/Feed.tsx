import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

export default function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-6xl md:grid-cols-3">
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section className="hidden md:col-span-1 md:inline-grid">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
