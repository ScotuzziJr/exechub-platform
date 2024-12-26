import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"

function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
    </Routes>      
    </>
  )
}

export default App
