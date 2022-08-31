
import { navigate } from '@storybook/addon-links'
import { edit } from 'fontawesome'
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
    client.delete(`/movies/${id}`).then((response) => {
      alert('de um refresh')
      navigate('/movies')
      console.log(response.data)
    })
  }

  return (
    <>
      <nav className='topo'>
        <h1>{movie.title}</h1>
        <figure>
          <button onClick={delet}><img src='https://as2.ftcdn.net/v2/jpg/04/68/08/01/1000_F_468080117_4IKU7gbXt8YcTcleuqWIlFo0XvJxrrjN.jpg' />
          </button>
          <button onClick={edit}><img src='https://as2.ftcdn.net/v2/jpg/03/96/92/71/1000_F_396927161_Am6aMm5fqlNeAFxPE2Gw5KjATUnJ7ac8.jpg' />
          </button>
        </figure>
      </nav>
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
