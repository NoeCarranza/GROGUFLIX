import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import './destacado.css'

export const Destacado = () => {
    return (
        <div className="Contenedor">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '200px 0 60px 0 ',
            }}>
            <Typography sx={{
                fontSize: '4rem',
                fontFamily: 'Oswald',
                fontWeight: '700',
                paddingBottom: '10px',
                color: '#FFFFFF',
            }}
            >Titulo
            </Typography>


            <Typography sx={{
                fontSize: '2rem',
                fontFamily: 'Oswald',
                fontWeight: '200',
                paddingBottom: '10px',
                color: '#ffffffb6',
            }}> 
            Descripcion
            </Typography>

            <Button variant="contained" color="success" style={{
                width: '150px',
                height: '50px',
                fontFamily: 'Oswald',
                fontSize: '20px',
                backgroundColor: '#1a9102',
                marginTop: '20px',
            }}>
                Ver
            </Button>
            </div>
        </div>
    )
}
