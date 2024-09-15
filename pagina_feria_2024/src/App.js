import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar.jsx';
import Inicio from './pages/inicio.jsx';
import NuestroEquipo from './pages/nuestro_equipo.jsx';
import DigitalSkillApp from './pages/digitalskillapp.jsx';
import Contacto from './pages/contacto.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Inicio />} />
      <Route path="/DigitalSkillApp" element={<DigitalSkillApp />}/>
      <Route path="/NuestroEquipo" element={<NuestroEquipo />}/>
      <Route path="/Contacto" element={<Contacto />}/>
    </Route>
  )
)

/**
 * Esta funcion procesa las rutas de la aplicación
 * 
 * @function AppRouter
 * @returns {RouterProvider} - A RouterProvider component with the router created from the routes.
 */
export default function AppRouter() {
  return (
    <RouterProvider router={router}/>
  );
}