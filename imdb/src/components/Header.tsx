import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'
import MenuItem from './MenuItem'

export default function Header() {
  return (
    <div className="mx-2 flex max-w-6xl items-center justify-between py-6 sm:mx-auto">
      <div className="flex">
        <MenuItem
          title={'Home'}
          address="/"
          icon={<AiFillHome className="mx-4 text-2xl sm:hidden" />}
          about="blu"
        />
        <MenuItem
          title={'About'}
          address="/about"
          icon={<BsFillInfoCircleFill className="mx-4 text-2xl sm:hidden" />}
          about="blu"
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl ">
            <span className="mr-1 rounded-lg bg-amber-500 px-2 py-1 font-bold">
              IMDb
            </span>
            <span className="text-x1 hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
