import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import LeadForm from "./pages/LeadForm"

function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<LeadForm />} />
    </Routes>      
    </>
  )
}

export default App
