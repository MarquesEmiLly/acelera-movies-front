
import { useState } from 'react'
import './style.css'
import { client } from '../../service/client'

export const Modal = () => {
  let title = ''
  let subtitle = ''
  let resume = ''
  let data = ''
  let image = ''
  let director = ''
  let writer = ''
  let classification = ''
  let studio = ''
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
  const submit = () => {
    alert(`FILME ADICIONADO AO BANCO: ${title}`)
    client.post('/movies', {
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
        <button onClick={handlerClick} className='abrir'>Abrir Modal!</button>
      </nav>
      {toggle && (
        <div className="modal-container">
          <section className="modal">
            <header>
              <h2>MODAL DA EMILLY</h2>
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
            <button onClick={submit} className='enviar'>enviar</button>
          </section>
        </div>)
      }
    </div>
  )
}
