import { useNavigate } from 'react-router'
// import { useState } from 'react/cjs/react.production.min'
import { client } from '../../service/client'
import './style.css'

export const Restaura = (num) => {
  const [email] = num + '@'
  let NewsaveLogin = ''
  let Newpassword = num
  let Confirm = num
  const navigate = useNavigate()
  const handlerClick = () => {
    client.post('/login', { NewsaveLogin, Newpassword, Confirm }).then(function (response) {
      navigate('/')
      console.log(response.data)
      if (Newpassword === Confirm) {
        alert('senhas iguais')
      } else {
        navigate('/restaurar')
        alert('senhas diferentes')
      }
    })
  }
  const handlerChangeLogin = (event) => {
    NewsaveLogin = event.target.value
    if (email === '' || email === undefined) {
      console.log('não é um  email valido')
    }
  }
  const handlerConfirm = (event) => {
    Confirm = event.target.value
  }
  const handlerChangePassword = (event) => {
    Newpassword = event.target.value
  }
  return (
    <>
    <section className='divmae'>
      <header>
      <h1>RESTAURE AQUI</h1>
     <h2>senha sugreid</h2>
      </header>
      <form className='formLogin2'>
        <label>Login</label><input type="email" placeholder="Email@email.com" value={email} className='inputLogin' onChange={handlerChangeLogin} ></input><br></br>
        <input type="current-password" placeholder="senha" className='inputLogin' onChange={handlerChangePassword}></input><br></br>
        <input type="current-password" placeholder="repita" className='inputLogin' onChange={handlerConfirm}></input>
        <button type="button" onClick={handlerClick}>Entrar</button>
      </form>
    </section>
    <footer>
      <p> Em caso de erro reinicie a página</p>
    </footer>
    </>
  )
}
