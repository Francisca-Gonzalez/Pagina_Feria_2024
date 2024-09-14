import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx';
import Inicio from './pages/inicio.jsx';
import Footer from './components/footer.jsx';
import NuestroEquipo from './pages/nuestro_equipo.jsx';
import DigitalSkillApp from './pages/digitalskillapp.jsx';
import Contacto from './pages/contacto.jsx';

export default function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/DigitalSkillApp" element={<DigitalSkillApp />}/>
        <Route path="/NuestroEquipo" element={<NuestroEquipo />}/>
        <Route path="/Contacto" element={<Contacto />}/>
      </Routes>
      <Footer />
    </Router>
  );
}