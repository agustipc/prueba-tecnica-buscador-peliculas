import responseMovies from '../mocks/with-results.json'

export function useMovies () {
  const movies = responseMovies.Search

  // para no usar el contrato que viene de la api, mapeamos los datos, usamos nuestro propio contrato
  // y si se cambia de api o la api cambia de contrato, solo tendremos que cambiar el mapeo
  const mappedMovies = movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}
