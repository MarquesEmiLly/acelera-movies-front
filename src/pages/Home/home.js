import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import './style.css'

export const Home = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    client.get('/movies').then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div className='container-pai'>
      <div className='container'>
        <nav className='navegacao'>
          <h1>Hello User!</h1>
          <Modal />
        </nav>
        <section className="listMovies">
          <h2>All Movies</h2>
          <ul>
            {movie.map((movie, index) => (
              <li key={index}>
                <figure>
                  {movie.image}
                </figure>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                <span>{movie.releaseDate}</span>
                <h3>{movie.resume}</h3>
              </li>
            )
            )}

          </ul>
        </section>
      </div>
    </div>
  )
}
