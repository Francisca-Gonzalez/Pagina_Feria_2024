import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
      <Route index element={<Inicio />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}