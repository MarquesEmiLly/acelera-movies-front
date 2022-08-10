import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../service/client'
import './style.css'
export const Home = () => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    client.get('/movies').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div>
      <section className="listMovies">
<ul>
{movie.map((movie, index) => (
  <li key={index}>
    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
  </li>
)

)}
</ul>
      </section>

    </div>
  )
}
