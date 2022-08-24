import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import './style.css'

export const Restaura = () => {
  let NewsaveLogin = ''
  let Newpassword = ''
  const navigate = useNavigate()
  const handlerClick = (e) => {
    client.post('/login', { NewsaveLogin, Newpassword }).then(function (response) {
      navigate('/movies')
      console.log(response.data)
    })
  }
  const handlerChangeLogin = (event) => {
    NewsaveLogin = event.target.value
  }

  const handlerChangePassword = (event) => {
    Newpassword = event.target.value
    // console.log('mudou senha')
  }
  return (
    <section className='divmae'>
      <h1>RESTAURE AQUI</h1>
      <form className='formLogin2'>
        <label>Login</label><input type="email" placeholder="email" className='inputLogin' onClick={handlerChangeLogin} ></input><br></br>
        <label>New Password</label><input type="current-password" placeholder="senha" className='inputLogin' onClick={handlerChangePassword}></input><br></br>
        <label> Repit</label><input type="current-password" placeholder="senha" className='inputLogin'></input>
        <button type="button" onClick={handlerClick}>Entrar</button>
      </form>
    </section>

  )
}
