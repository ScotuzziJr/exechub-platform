import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; // Import the new Dashboard component
import Hero from "./pages/Hero";
import LeadForm from "./pages/LeadForm";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<LeadForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
