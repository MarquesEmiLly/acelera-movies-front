import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login/cadastro'
import { Home } from './pages/home'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/movies" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  )
}
