import { Route, Routes } from "react-router-dom";
import Apresentation from "./pages/Apresentation";
import LeadForm from "./pages/LeadForm";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Plataforma from "./pages/plataforma";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Plataforma />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<LeadForm />} />
        <Route path="/" element={<Apresentation />} />
      </Routes>
    </>
  );
}

export default App;
