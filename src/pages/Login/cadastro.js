import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import { Link } from 'react-router-dom'
import '../Login/style.css'

export const Login = () => {
  let saveLogin = ''
  let password = ''
  const navigate = useNavigate()

  const handlerClick = (e) => {
    client.post('/login', { saveLogin, password }).then(function (response) {
      navigate('/movies')
      console.log(response.data)
    })

    // client.get('/movies').then(function (response) {
    // console.log(response.data)
    // })
  }
  const handlerChangeLogin = (event) => {
    saveLogin = event.target.value
  }

  const handlerChangePassword = (event) => {
    password = event.target.value
    // console.log('mudou senha')
  }
  return (
<section className="container">
  <form className='formLogin'>
    <label>Login</label><input onChange={handlerChangeLogin} type="email" placeholder="email" className='inputLogin' ></input><br></br>
    <label>Password</label><input onChange={handlerChangePassword} type="current-password" placeholder="senha" className='inputLogin'></input>
    <Link to={'/restaurar'}><u>esqueceu sua senha?</u></Link> <br></br>
    <button onClick={handlerClick} type="button">Entrar</button>
  </form>
</section>

  )
}
