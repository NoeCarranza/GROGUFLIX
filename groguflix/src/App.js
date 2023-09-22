import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import Otros from "./pages/otros";
import Formulario from "./pages/Formulario";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Peliculas' element={<Peliculas />} />
        <Route path='/Series' element={<Series />} />
        <Route path='/Otros' element={<Otros />} />
        <Route path='/Formulario' element={<Formulario />} />
      </Routes>
    </Router>

  )
}

export default App;
