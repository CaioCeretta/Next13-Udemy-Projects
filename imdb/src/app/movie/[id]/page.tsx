import Image from 'next/image'

interface Params {
  params: {
    id: number
  }
}

type Genre = {
  id: number
  name: string
}

type MovieProps = {
  title: string
  adult: boolean
  backdrop_path: string
  poster_path: string
  original_title: string
  release_date: string
  vote_count: number
  genres: Genre[]
  overview: string
}

async function getMovie(movieId: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_KEY}&language=en-US`,
  )

  const data = (await res.json()) as MovieProps

  return data
}

export default async function MoviePage({ params: { id } }: Params) {
  const movieId = id

  const movie = await getMovie(movieId)

  if (!movie) {
    throw new Error('Movie not found')
  }

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col  items-center justify-center p-4 md:flex-row md:space-x-6 md:pt-8">
        <Image
          className="rounded-lg"
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
            height: '100%',
          }}
        />
        <div>
          <h2 className="text-center text-2xl font-bold">{movie.title}</h2>
          <p className="mb-3 text-lg">
            <span className="mr-1 font-semibold">Overview: </span>{' '}
            {movie.overview}
          </p>
          <div className="flex flex-row gap-2">
            <span className="font-bold">Genres:</span>
            {movie.genres.map((genre) => {
              return (
                <div key={genre.id} className="">
                  <span> {genre.name}</span>
                </div>
              )
            })}
          </div>
          <p className="my-3">
            <span className=" mr-1 font-semibold ">Date Released:</span>
            <span className="">{movie.release_date}</span>
          </p>
          <p>
            <span className="font-semibold">Rating:</span>{' '}
            <span>{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
