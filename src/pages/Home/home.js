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
    <div className='container'>
      <div className='navegador'>
        <div className='title'> <h1>Hello User!</h1> </div>
        <div className='title2'> <h2>All Movies</h2> </div>
      </div>
      <Modal />
      <section className="listMovies">
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
  )
}
