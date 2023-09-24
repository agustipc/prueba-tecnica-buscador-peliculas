import './App.css'
import { ListOfMovies, NoMoviesResults } from './components/Movies'
import responseMovies from './mocks/with-results.json'

function App () {
  const movies = responseMovies.Search
  const hasMovies = movies.length > 0

  return (
    <div className='page'>
      <header>
        <h1>BUSCADOR PELICULAS</h1>
        <form className='form'>
          <input placeholder='Avenger, The Matrix, Star Wars...' type='text' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          hasMovies
            ? ListOfMovies({ movies })
            : NoMoviesResults()
        }
      </main>
    </div>
  )
}

export default App
