import './App.css'
import { Movies } from './components/Movies'
import responseMovies from './mocks/with-results.json'

function App () {
  const movies = responseMovies.Search

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
