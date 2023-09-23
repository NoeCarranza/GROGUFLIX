import React from "react";
import Icono from '../assets/grogu2.png';
import '../css/inicio.css';
import { Link } from "react-router-dom";


const Inicio = () =>{
    return(
        <div className="contenedor">
    <img src={Icono} alt="Icono" className="Icono"></img>
    <Link>
    <button  className="boton-ingreso">Ingresar</button>
    </Link>
    </div>
    )
}
export default Inicio