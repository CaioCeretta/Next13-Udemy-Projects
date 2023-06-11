import Image from 'next/image'
import Link from 'next/link'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'

interface MovieCardProps {
  movie: {
    id: string
    title: string
    overview: string
    release_date: string
    backdrop_path: string
    poster_path: string
    vote_count: number
  }
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="group cursor-pointer rounded-md transition-shadow duration-200 sm:m-2 sm:border-slate-400 sm:p-3 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`movie/${movie.id}`}>
        <Image
          className="group-hover:opacity-80 sm:rounded-t-lg"
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Capa do filme"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Link>
      <div className="p-2">
        <p className="text-md line-clamp-2">{movie.overview}</p>
        <h2 className="truncate py-1 text-lg font-bold">
          {movie.title || 'Title not available'}
        </h2>

        <p>
          <span className="px-2">{movie.release_date}</span>
          <span>
            {movie.vote_count}{' '}
            <BsFillHandThumbsUpFill className="ml-3 mr-1 inline h-5" />
          </span>
        </p>
      </div>
    </div>
  )
}
