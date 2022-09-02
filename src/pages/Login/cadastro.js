import { useNavigate } from 'react-router'
import { client } from '../../service/client'
import { Link } from 'react-router-dom'
import '../Login/style.css'

export const Login = () => {
  let saveLogin = ''
  let password = 123
  const navigate = useNavigate()

  const handlerChangePassword = (event) => {
    password = event.target.value
  }
  const handlerClick = (e) => {
    client.get('/login', { saveLogin, password }).then(function (response) {
      console.log(response.data)
      if (saveLogin && password === null) {
        return alert('vazio')
      }
      navigate('/movies')
    })
  }
  const handlerChangeLogin = (event) => {
    saveLogin = event.target.value
  }
  return (
    <>
      <section className="container">
        <h1>Acelera Movies</h1>
        <form className='formLogin'>
          <label>Login</label><input onChange={handlerChangeLogin} type="email" id='email' placeholder="email" className='inputLogin' required></input><br></br>
          <label>Password</label><input onChange={handlerChangePassword} type="current-password" placeholder="senha" className='inputLogin' required></input>
          <Link to={'/restaurar'}><u>esqueceu sua senha?</u></Link> <br></br>
          <button onClick={handlerClick} type="button">Entrar</button>
        </form>
      </section>
      <footer>
        <p>Obrigada por acessar os filmes da Emilly</p>
      </footer>
    </>
  )
}
