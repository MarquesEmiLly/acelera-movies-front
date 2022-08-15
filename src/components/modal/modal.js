import { useState } from 'react'
import './style.css'
export const Modal = () => {
  const [toggle, setToggle] = useState(false)
  const handlerClick = () => {
    setToggle(!toggle)
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
              <input type="text" placeholder='Title' />
              <input type="text" placeholder='subtitle' />
            </form>
            <br></br>
              <input type="text" placeholder='Resume' className='resume'/>
              <br></br>
              <form className='form2'>
              <input type="text" placeholder='data'/>
              <input type="text" placeholder='imagem'/>
              </form>
              <br></br>
              <form className='form2'>
              <input type="text" placeholder='diretor'/>
              <input type="text" placeholder='escritor'/>
              </form>
              <br></br>
              <form className='form2'>
              <input type="text" placeholder='classificação'/>
              <input type="text" placeholder='studio'/>
              </form>
              <input type="text" placeholder='stars' className='resume'/>
          </section>
        </div>)
      }
    </div>
  )
}
