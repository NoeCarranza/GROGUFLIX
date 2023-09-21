import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import firmaImage from './firma.png';

export const Footer = () => {
    return (
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
        <img className="firma" src={firmaImage} alt="firma" style={{
            width: '80px',
        }}/>
        </div>

    </footer >
    )
}