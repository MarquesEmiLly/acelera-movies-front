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
    <>
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
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  <h3>{movie.resume}</h3>
                </li>
              )
              )}

            </ul>
          </section>
        </div>
      </div>
      <footer className='home'>
        <p>Obrigada por acessar os filmes da Emilly</p>
      </footer>
    </>
  )
}
