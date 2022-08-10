import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import './style.css'
export const Home = () => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    client.get('/movies').then((response) => {
      setMovie(response.data.map(item => item.title))
    })
  }, [])

  return (
    <div>
      <section className="listMovies">
        <ul>
          <li>
            {movie}
          </li>
        </ul>
      </section>
    </div>
  )
}
