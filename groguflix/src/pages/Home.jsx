import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PosterAhsoka from "../assets/ahsokaposter.webp";
import Mandalorian from "../assets/mandalorian.jpg"
import Poster from "../assets/star-wars-poster.jpg"
import Documental from "../assets/theforceandthemagic.jpeg"
import Peli from "../assets/peli-sw.webp"
import '../css/destacado.css';
import '../css/mas-vistos.css'
import '../css/footer.css';



function Home() {

    return (
        <main>
            {/* destacado */}

            <section className="Contenedor" style={{
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
            }}>
                <div className="secciones" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '29px 0 10px 0',
                }}>
                    <img className="ahsoka" src={PosterAhsoka} alt="Ahsoka" style={{
                        maxWidth: '350px',
                        padding: '29px',
                    }}></img>
                    <div className="info"style={{
                            color: '#FFFFFF',
                            padding:'0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'flex-start',
                            padding: '0',
                            }}
                    >
                        <Typography style={{
                            fontSize: '5rem',
                            fontWeight: '700',
                            fontFamily: 'Oswald',
                            padding: '0',
                            margin:'0',
                        }}>Ashoka
                        </Typography>


                        <Typography sx={{
                            fontSize: '2rem',
                            fontFamily: 'Oswald',
                            fontWeight: '200',
                            color: '#ffffffb6',
                        }}>
                            Ya Disponible!
                        </Typography>


                        <Typography sx={{
                            textAlign: 'justify',
                            fontFamily: 'Oswald',
                            color: '#ffffff',
                            fontSize: '20px',
                            maxWidth: '650px',
                        }}>
                            Después de la caída del Imperio, seguiremos a la Jedi
                            “en la caza del malvado Gran Almirante Thrawn
                            con la esperanza de localizar al desaparecido Ezra Bridger,
                            el joven Jedi que desapareció con Thrawn hace muchos años.
                            La Galaxia, más vulnerable que nunca,
                            se expone a una nueva amenaza.
                            Ahsoka Tano,
                            la antigua padawan de Anakin Skywalker deberá
                            investigar el origen y naturaleza de la misma.
                        </Typography>

                        <Button variant="contained" color="success" style={{
                            width: '150px',
                            height: '50px',
                            fontFamily: 'Oswald',
                            fontSize: '20px',
                            backgroundColor: '#1a9102',
                            marginTop: '10px',
                        }}>
                            Ver trailer
                        </Button>
                    </div>
                </div>
            </section>

            {/* mas vistos */}
            <section>
                <div className="container">
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                    }}>Más Vistos</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <div className="contenedor-imagenes">
                            <img src={Mandalorian} alt="mandalorian" className="imagenes"></img>
                            <h2>Mandalorian</h2>
                            <h3>Temporada 3</h3>
                            <h3>2023</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <img src={Poster} alt="peliculas" className="imagenes" style={{
                                width:'270px',
                            }}></img>
                            <h2>Star Wars</h2>
                            <h3>The Force Awakens</h3>
                            <h3>2015</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <img src={Documental} alt="peliculas" className="imagenes"></img>
                            <h2>Light & Magic</h2>
                            <h3>Documental</h3>
                            <h3>2022</h3>
                        </div>
                        <div className="contenedor-imagenes">
                            <img src={Peli} alt="peliculas" className="imagenes"></img>
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