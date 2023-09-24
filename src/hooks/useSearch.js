import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede enviar un campo vacio')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede enviar un campo numerico')
      return
    }
    if (search.length < 3) {
      setError('No se puede enviar un campo con menos de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
