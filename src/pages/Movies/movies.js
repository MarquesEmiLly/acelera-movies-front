// import { client } from '../../service/client'

import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './style.css'

export const Movies = () => {
  const [id, setMovie] = useState([])
  useEffect(() => {
    client.get('/movies/:11').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className='container'>
      <h1>Filmes por id:</h1>
        {id.map((movie, id) => (
         <h2 key = { id } >
          <p to={`/movies/:11 ${movie.id}`}>{movie.title}</p>
          </h2>
        )
        )}
        </div>
  )
}
