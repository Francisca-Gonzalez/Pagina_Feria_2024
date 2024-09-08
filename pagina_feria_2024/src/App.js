import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx';
import Inicio from './pages/inicio.jsx';

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
    <Router basename="/Pagina_Feria_2024">
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Inicio />} />
      </Route>
    </Router>
  );
}