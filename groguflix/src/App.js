import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import Otros from "./pages/otros";
import Formulario from "./pages/Formulario";
import Inicio from "./pages/Inicio";
import Video from "./pages/video";
import Notfound from "./pages/nofound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/videos' element={<Peliculas />} />
        <Route path='/Series' element={<Series />} />
        <Route path='/Otros' element={<Otros />} />
        <Route path='/Formulario' element={<Formulario />} />
        <Route path='/videos/:id' element={<Video />} />
        <Route path='*' element={< Notfound />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App;
