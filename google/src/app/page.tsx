import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeHeader />
      {/* Body Component */}
      <div className="mt-24 flex flex-col items-center">
        <Image
          width={300}
          height={100}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          }
          alt="logo"
        />
        <HomeSearch />
      </div>
      {/* Footer Component */}
    </>
  )
}
