
import { useState } from 'react'
import { useParams } from 'react-router'
import { client } from '../../service/client'

export const ModalForm = () => {
  let title = ''
  let subtitle = ''
  let resume = ''
  let data = ''
  let image = ''
  let director = ''
  let writer = ''
  let classification = ''
  let studio = ''
  const { id } = useParams()
  const [toggle, setToggle] = useState(false)
  const handleChangeTitle = (event) => {
    title = event.target.value
  }
  const handleChangeSubtitle = (event) => {
    subtitle = event.target.value
  }
  const handleChangeResume = (event) => {
    resume = event.target.value
  }
  const handleChangeData = (event) => {
    data = event.target.value
  }
  const handleChangeImagem = (event) => {
    image = event.target.value
  }
  const handleChangeDiretor = (event) => {
    director = event.target.value
  }
  const handleChangeEscritor = (event) => {
    writer = event.target.value
  }
  const handleChangeClassific = (event) => {
    classification = event.target.value
  }
  const handleChangeStudio = (event) => {
    studio = event.target.value
  }
  const edit = () => {
    client.put(`/movies/${id}`, {
      title,
      subtitle,
      resume,
      releaseDate: data,
      image,
      director,
      writer,
      classification,
      studio,
      gender: 'action',
      actor: 'fulano',
      awards: 'oscar',
      note: '0'
    }).then((response) => {
      console.log(response.data)
    })
  }
  const handlerClick = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <div className="tela">
      <nav>
        <button onClick={handlerClick}><img src='https://as2.ftcdn.net/v2/jpg/03/96/92/71/1000_F_396927161_Am6aMm5fqlNeAFxPE2Gw5KjATUnJ7ac8.jpg' /></button>
      </nav>
      {toggle && (
        <div className="modal-container">
          <section className="modal">
            <header>
              <h2>editar Filme</h2>
              <button onClick={handlerClick} className="close">x</button>
            </header>
            <form className='form1'>
              <input type="text" placeholder='title' onChange={handleChangeTitle} />
              <input type="text" placeholder='subtitle' onChange={handleChangeSubtitle} />
            </form>
            <br></br>
            <input type="text" placeholder='Resume' className='resume' onChange={handleChangeResume} />
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='data' onChange={handleChangeData} />
              <input type="text" placeholder='imagem' onChange={handleChangeImagem} />
            </form>
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='diretor' onChange={handleChangeDiretor} />
              <input type="text" placeholder='escritor' onChange={handleChangeEscritor} />
            </form>
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='classificação' onChange={handleChangeClassific} />
              <input type="text" placeholder='studio' onChange={handleChangeStudio} />
            </form>
            <button onClick={edit} className='enviar'>enviar</button>
          </section>
        </div>)
      }
    </div>
  )
}

/* import { useState } from 'react'

export const ModalForm = ({ text, type, onChange }) => {
  const [toggle, setToggle] = useState(true)
  const handlerClick = () => {
    setToggle(toggle => !toggle)
    alert('editando')
  }
  return (
    <>
      {toggle &&
      <form>
        <button type={type} onClick={handlerClick}><img src='https://as2.ftcdn.net/v2/jpg/03/96/92/71/1000_F_396927161_Am6aMm5fqlNeAFxPE2Gw5KjATUnJ7ac8.jpg' /></button>
        <input type={type} placeholder={text} onChange={onChange} />
        </form>
      }
    </>
  )
}
*/
