import { useParams } from 'react-router'
import { client } from '../../service/client'

export const modalEmi = () => {
  const { id } = useParams()
  const edit = () => {
    client.put(`/movies/${id}`, {
      title: '',
      subtitle: '',
      resume: '',
      releaseDate: '',
      image: '',
      director: '',
      writer: '',
      classification: '',
      studio: '',
      gender: 'action',
      actor: 'fulano',
      awards: 'oscar',
      note: '0'
    }).then((response) => {
      alert('edit testee')
      console.log(response.data)
    })
  }
  return (
    <>
      <h1> modal para editar</h1>
      <h2>{edit}</h2>
    </>
  )
}
