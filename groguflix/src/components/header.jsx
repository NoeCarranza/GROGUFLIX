import React from "react";
import Logo from "../assets/grogu2.png"
import { Link } from "react-router-dom";
import './header.css';


const Header = () => {

    return (
        <section className="menu">
            <Link to="/Home" style={{ textDecoration: 'none' }}>
                <img src={Logo} style={{
                    maxWidth: '350px',
                }} />
            </Link>
            <div className="links">
                <Link to="/videos" className="enlaces"
                >SAGA</Link>
                <Link to="/Series" className="enlaces"
                >SERIES</Link>
                <Link to="otros"className="enlaces"
                >OTROS</Link>

            </div>
            <Link to="/Formulario"><button className="boton-formulario">Subir video </button></Link>
        </section>

    )
}



export default Header