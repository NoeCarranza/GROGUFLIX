import './App.css';
import React from 'react';
import Header from './componentes/header/header';
import {Destacado} from './componentes/destacado/destacado';
import { MasVistos } from './componentes/mas-vistos/mas-vistos';
import { Footer } from './componentes/footer/footer';


function App() {
  return (
    <>
      <Header/>
      <Destacado/>
      <MasVistos/>
      <Footer/>
    </>
  )
}

export default App;
