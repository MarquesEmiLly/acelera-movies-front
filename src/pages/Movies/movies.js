import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ModalForm } from '../../components/componentes/modalForm'
import { client } from '../../service/client'
import './style.css'

export const Movies = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState([])
  useEffect(() => {
    client.get(`/movies/${id}`).then((response) => {
      setMovie(response.data)
    })
  }, [])
  const delet = () => {
    client.delete(`/movies/${id}`).then((response) => {
      alert('de um refresh')
      navigate('/movies')
      console.log(response.data)
    })
  }
  const navega = () => {
    navigate('/movies')
  }

  return (
    <>
    <nav className='retornar'>
    <button onClick={navega}><img src='https://cdn-icons-png.flaticon.com/512/3586/3586008.png'></img></button>
    </nav>
      <header className='topo'>
        <h1>{movie.title}</h1>
        <figure>
          <button onClick={delet}><img src='https://as2.ftcdn.net/v2/jpg/04/68/08/01/1000_F_468080117_4IKU7gbXt8YcTcleuqWIlFo0XvJxrrjN.jpg' />
          </button>
        </figure>
        <ModalForm />
      </header>
      <div className='movieId'>
        <ul>
          <li>Filme selecionado: {movie.title}</li>
          <li>subtitle: {movie.subtitle}</li>
          <li>Resumo:{movie.resume}</li>
          <li>Studio: {movie.studio}</li>
          <li>classification: {movie.classification}</li>
          <li>director: {movie.director}</li>
        </ul>
      </div>
    </>

  )
}
