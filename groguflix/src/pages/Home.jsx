import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Logo from "../assets/grogu2.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import PosterAhsoka from "../assets/ahsokaposter.webp";
import Mandalorian from "../assets/mandalorian.jpg"
import Poster from "../assets/star-wars-poster.jpg"
import Documental from "../assets/theforceandthemagic.jpeg"
import Peli from "../assets/peli-sw.webp"
import Firma from "../assets/firma.png"
import '../css/destacado.css';
import '../css/mas-vistos.css'
import '../css/footer.css';


function Home() {

    const pages = ['Saga', 'Series', 'Otros'];

    return (
        <main>
            {/* Menu */}
            <AppBar position="static" style={{
                backgroundColor: '#328888',
                fontFamily: 'Oswald',
            }}>
                <Container maxWidth="xl">
                    <Toolbar
                    style={{
                        display: 'flex',
                        flexDirection:'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <Box>
                            <img src={Logo} style={{
                                maxWidth:'350px',
                            }} />
                        </Box>
                        <Box sx={{
                            flexGrow: 1, display: {
                                md: 'flex',
                                width: '400px',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }
                        }}
                        >
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{
                            flexGrow: 1, display: {
                                xs: 'none', md: 'flex',
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                gap: '50px',
                            }
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'Oswald',
                                        fontSize: '1.8rem',
                                        fontWeight: '300',
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Subir video o agregar categoría">
                                <Button variant="contained" endIcon={<SendIcon />}
                                    sx={{
                                        backgroundColor: '#6ebe0793',
                                        fontFamily: 'Oswald',
                                        fontWeight: '200',
                                        fontSize: '20px',
                                        width: '200px',
                                        height: '50px',
                                    }}
                                >Subir video</Button>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

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

            {/* FOOTER */}

            <footer className="footer"
            style={{
                backgroundColor: '#156c6c',
                width: '100 %',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                boxSizing: 'border-box',
                color: '#ffffff',
                fontSize: '20px',
                padding: '20px',
                margin: '0%',
                fontFamily: 'Oswald',
                fontWeight: '200',

}}>
        <div className="redes" style={{
            gap: '20px',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'row',
            alignItems:'center',
        }}>
            <a href='https://github.com/NoeCarranza'>
                <FacebookIcon style={{
                    color: '#2d2020',
                    fontSize: '40px',
                }}/>
            </a>
            <a href='https://github.com/NoeCarranza'>
                <TwitterIcon style={{
                    color: '#2d2020',
                    fontSize: '40px',

                }}/>
            </a>
            <a href='https://github.com/NoeCarranza'>
                <InstagramIcon
                style={{
                    color: '#2d2020',
                    fontSize: '40px',
                }}/>
            </a>
        </div>
        <div className="desarrollado" style={{
                        display: 'flex',
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignItems:'center',
                        color: '#2d2020',
        }}>
        <strong>Desarrollado por:</strong>
        <img className="firma" src={Firma} alt="firma" style={{
            width: '80px',
        }}/>
        </div>

    </footer >

        </main>
    );
}

export default Home;