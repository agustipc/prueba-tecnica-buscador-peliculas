import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  // usamos useCallback (igual que usememeo pero para funciones) para que solo se genere esta funcion cuando cambie el search
  // le pasamos el search por parametro para que solo se ejecute cuando llamamos a la funcion
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies
  const sortedMovies = useMemo(() => {
    if (!sort) return movies
    return [...movies].sort((a, b) => a.title.localeCompare(b.title))
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading, error }
}
