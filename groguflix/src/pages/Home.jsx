import React from 'react';
import PosterAhsoka from "../assets/ahsokaposter.webp";
import Mandalorian from "../assets/mandalorian.jpg"
import Poster from "../assets/star-wars-poster.jpg"
import Documental from "../assets/theforceandthemagic.jpeg"
import Peli from "../assets/peli-sw.webp"
import '../css/destacado.css';
import '../css/mas-vistos.css';



function Home() {

    return (
        <main>
            {/* destacado */}

            <section className="Contenedor">
                <div className="secciones">
                    <img className="ahsoka" src={PosterAhsoka} alt="Ahsoka"></img>
                    <div className="info">
                        <h1 className='tit'>Ashoka</h1>
                        <h2 className='subtitulo'>Ya Disponible!</h2>
                        <h3 className='texto' >
                            Después de la caída del Imperio, seguiremos a la Jedi
                            “en la caza del malvado Gran Almirante Thrawn
                            con la esperanza de localizar al desaparecido Ezra Bridger,
                            el joven Jedi que desapareció con Thrawn hace muchos años.
                            La Galaxia, más vulnerable que nunca,
                            se expone a una nueva amenaza.
                            Ahsoka Tano,
                            la antigua padawan de Anakin Skywalker deberá
                            investigar el origen y naturaleza de la misma.
                        </h3>
                        <button className='btn-ver-mas'>
                            Ver trailer
                        </button>
                    </div>
                </div>
            </section>

            {/* mas vistos */}
            <section>
                <div className="container">
                    <h1 className='tit'>MAS VISTOS</h1>
                    <div className='cartelera'>
                        <div className="contenedor-imagenes">
                            <div to="/Series"><img src={Mandalorian} alt="mandalorian" className="imagenes"></img></div>
                            <h2>Mandalorian</h2>
                            <h3>Temporada 3</h3>
                            <h3>2023</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <div to="/Peliculas">
                            <img src={Poster} alt="peliculas" className="imagenes" style={{
                                width:'270px',
                            }}></img></div>
                            <h2>Star Wars</h2>
                            <h3>The Force Awakens</h3>
                            <h3>2015</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <div to="/Otros">
                            <img src={Documental} alt="peliculas" className="imagenes"></img></div>
                            <h2>Light & Magic</h2>
                            <h3>Documental</h3>
                            <h3>2022</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <div to="/Peliculas"><img src={Peli} alt="peliculas" className="imagenes"></img></div>
                            <h2>Star Wars: Episode IV</h2>
                            <h3>A New Hope</h3>
                            <h3>1977</h3>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Home;