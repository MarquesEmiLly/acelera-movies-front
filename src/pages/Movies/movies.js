
import { navigate } from '@storybook/addon-links'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
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
  const delet = () => {
    navigate('/home')
  }

  const edit = () => {
    alert('editando dados.....')
  }
  return (
    <>
      <nav className='topo'>
        <h1>{movie.title}</h1>
        <button onClick={edit}>editar filme</button> <br></br>
        <button onClick={delet}>deletar filme</button>
      </nav>
      <div className='movieId'>
        <ul>
          <li>Filme selecionado: {movie.title}</li>
          <li>Studio: {movie.studio}</li>
          <li>Resumo:{movie.resume}</li>
        </ul>
      </div>
    </>

  )
}
