import React from "react";
import Grogu from '../assets/error.jpg'
import '../css/footer.css';
import '../css/error.css';



const Notfound = () => {


    return (
        <>

        {/* error */}
    <section className="error">
        <div className="notfound">
            <img src={Grogu} className="grogu"/>
            <h1 className="titulo">Error 404</h1>
            <h2 className="cuerpo">Lamentamos no haber encontrado lo que buscabas</h2>
        </div>
    </section>

    </>
    )
}

export default Notfound