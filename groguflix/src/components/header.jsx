import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Logo from "../assets/grogu2.png"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";

const Header = () => {

    const pages = ['Saga', 'Series', 'Otros'];
    
    return (
        <AppBar position="static" style={{
            backgroundColor: '#328888',
            fontFamily: 'Oswald',
        }}>
            <Container maxWidth="xl">
                <Toolbar
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                    <Link>
                        <img src={Logo} style={{
                            maxWidth: '350px',
                        }} />
                    </Link>
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
    )
}



export default Header