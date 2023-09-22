import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../assets/grogu2.png"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import Firma from "../assets/firma.png"
import '../css/footer.css';
import '../css/series.css';

function Series() {

    const pages = ['Saga', 'Series', 'Otros'];

    return (
        <div>
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

            {/* Seccion principal */}
            <section className="Series">
                <h1 style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '5rem',
                }}>Series</h1>
                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
                                <div style={{
                    fontFamily: 'Oswald',
                    color: '#ffffff',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>

                
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
        </div>
        
    )
}
export default Series;