import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './components/Login/cadastro'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  )
}
