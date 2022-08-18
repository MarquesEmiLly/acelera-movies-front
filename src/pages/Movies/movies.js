import { useEffect, useState } from 'react'
import { client } from '../../service/client'

export const Movies = () => {
  const [movies, setMovie] = useState([])
  useEffect(() => {
    client.get('/movies').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <>
      <h1>Pagina movies</h1>
      <h2> {movies} </h2>
    </>
  )
}
