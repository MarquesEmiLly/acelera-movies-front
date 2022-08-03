export const Login = () => {
  return (
<section className="container">
  <form>
    <label>Login</label><input type="email" placeholder="email"></input><br></br>
    <label>Password</label><input type="password" placeholder="senha"></input>
    <p>esqueceu sua senha?</p><br></br>
    <button onClick="oncClick" >Entrar</button>
  </form>
</section>

  )
}
