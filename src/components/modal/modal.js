import { useState } from 'react'
import './style.css'
export const Modal = () => {
  const [toggle, setToggle] = useState(true)
  const handlerClick = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <button onClick={handlerClick}>Abrir Modal!</button>
      {toggle && (
        <div className="modal-container">
          <section className="modal">
            <header>
              <h2>MODAL DA EMILLY</h2>
              <button onClick={handlerClick} className="close">x</button>
            </header>

            <p>eu sou a Emii</p>
          </section>
        </div>)
      }
    </>
  )
}
