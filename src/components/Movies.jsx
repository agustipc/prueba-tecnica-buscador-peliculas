import PropTypes from 'prop-types'

export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
      movies.map(movie => (
        <li className='movie' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))
      }
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <p>No movies found</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies.length > 0

  return (
    hasMovies
      ? ListOfMovies({ movies })
      : NoMoviesResults()
  )
}

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}
