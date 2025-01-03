import { Route, Routes } from "react-router-dom";
import Apresentation from "./pages/Apresentation";
import LeadForm from "./pages/LeadForm";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import FormsInvite from "./pages/leads/FormsInvite";
import PaymentPage from "./pages/payments";
import Plataforma from "./pages/platform";
import Profile from "./pages/platform/profile";

function App() {
  return (
    <Routes>
      <Route path="/leads" element={<FormsInvite />} />
      <Route path="/payments" element={<PaymentPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Plataforma />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<LeadForm />} />
      <Route path="/" element={<Apresentation />} />
    </Routes>
  );
}

export default App;
