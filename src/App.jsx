import './App.css'
// useRef :: permite crear referencia mutable que persiste en el ciclo de vida del componente
// cada vez que cambia no renderiza el componente
// tambien para guardar referencia del DOM
import { useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const inputRef = useRef()
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    // Forma Controlada:
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>BUSCADOR PELICULAS</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} ref={inputRef} name='query' placeholder='Avenger, The Matrix, Star Wars...' type='text' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
