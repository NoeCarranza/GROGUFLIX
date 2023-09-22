import React from "react";
import Icono from '../assets/grogu2.png'
import '../css/inicio.css'


const Inicio = () =>{
    return(
        <div className="contenedor">
    <img src={Icono} alt="Icono" className="Icono"></img>
    <button  className="boton-ingreso">Ingresar</button>
    </div>
    )
}
export default Inicio