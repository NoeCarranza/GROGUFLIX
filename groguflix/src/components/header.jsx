import React from "react";
import Logo from "../assets/grogu2.png"
import { Link } from "react-router-dom";
import './header.css';


const Header = () => {
    
    return (
            <section className="menu">
                    <Link style={{ textDecoration: 'none' }}>
                        <img src={Logo} style={{
                            maxWidth: '350px',
                        }} />
                    </Link>
                    <div className="links">
                        <Link className="enlaces"
                            >SAGA</Link>
                        <Link className="enlaces"
                            >SERIES</Link>
                                                    <Link className="enlaces"
                            >OTROS</Link>
                        
                        </div>
                        <button className="boton-formulario">Subir video </button>
            </section>
        
    )
}



export default Header