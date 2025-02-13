import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login/cadastro'
import { Home } from './pages/Home/home'
import { Movies } from './pages/Movies/movies'
import { Restaura } from './pages/RestauraSenha/restaurar'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/movies" element={<Home />} exact />
        <Route path="/movies/:id" element={<Movies />} exact />
        <Route path="/restaurar" element={<Restaura/>} exact />
      </Routes>
    </BrowserRouter>
  )
}
