import { useState } from 'react'
import './style.css'
export const Modal = () => {
  let title = ''
  let subtitle = ''
  let resume = ''
  let data = ''
  const [toggle, setToggle] = useState(false)
  const handlerClick = () => {
    setToggle(!toggle)
  }
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
  const submit = () => {
    alert(`SALVANDO O NOVO FILME: ${title}`)
    console.log(subtitle, resume, data)
  }

  return (
    <div className="tela">
      <nav>
        <button onClick={handlerClick}>Abrir Modal!</button>
      </nav>
      {toggle && (
        <div className="modal-container">
          <section className="modal">
            <header>
              <h2>MODAL DA EMILLY</h2>
              <button onClick={handlerClick} className="close">x</button>
            </header>
            <form className='form1'>
              <input type="text" placeholder='Title' onChange={handleChangeTitle} />
              <input type="text" placeholder='subtitle' onChange={handleChangeSubtitle} />
            </form>
            <br></br>
            <input type="text" placeholder='Resume' className='resume' onChange={handleChangeResume}/>
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='data' onChange={handleChangeData } />
              <input type="text" placeholder='imagem' />
            </form>
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='diretor' />
              <input type="text" placeholder='escritor' />
            </form>
            <br></br>
            <form className='form2'>
              <input type="text" placeholder='classificação' />
              <input type="text" placeholder='studio' />
            </form>
            <input type="text" placeholder='stars' className='resume' />
            <button onClick={submit} className='enviar'>enviar</button>
          </section>
        </div>)
      }
    </div>
  )
}
