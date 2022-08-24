
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import { Modal } from '../../components/modal/modal'
import { client } from '../../service/client'
import './style.css'

export const Movies = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  useEffect(() => {
    client.get(`/movies/${id}`).then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <>
    <div className='movieId'>
      <header>
        <h1>{movie.title}</h1>
        <button onClick=''>editar filme</button> <br></br>
        <button onClick=''>deletar filme</button>
      </header>
      <ul>
        <li>Filme selecionado: {movie.title}</li>
        <li>Studio: {movie.studio}</li>
        <li>Resumo:{movie.resume}</li>
      </ul>
    </div>
    <footer>
      <p>Obrigada por acessar os filmes da Emilly</p>
    </footer>
    </>
  )
}
