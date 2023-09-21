import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import './header.css'


const pages = ['Saga', 'Series', 'Otros'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: '#328888',
            fontFamily: 'Oswald',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Box>
                    <img src="/img/grogu2.png"/>
                    </Box>
                    <Box sx={{
                        flexGrow: 1, display: {
                            xs: 'flex',
                            md: 'none',
                            width: '400px',
                            alignItems: 'center',
                            justifyContent: 'center',

                        }
                    }}
                    >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'Oswald',
                                    fontSize: '1.8rem',
                                    fontWeight:'300',
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
                                    width:'200px',
                                    height:'50px',
                                }}
                            >Subir video</Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;