import React from "react";
import { Link } from "@mui/material";
import './mas-vistos.css'

export const MasVistos = () => {
    return (
        <div className="contenendor" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1 style={{
                fontSize: '4rem',
                fontFamily: 'Oswald',
                fontWeight: '800',
                padding: '10px',
                color: '#115050"',
                textDecoration: 'none',

            }}>Lo más visto</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
            }}>
                <div>
                <Link style={{
                    color: "#434040",
                    fontSize: '2rem',
                    fontFamily: 'Oswald',
                    fontWeight: '700',
                    textDecoration: 'none',
                }}> <img  src= "./otros.jfif" alt="mandalorian"/>
                Peli 1
                </Link>
                </div>
                <Link
                    style={{
                        color: "#434040",
                        fontSize: '2rem',
                        fontFamily: 'Oswald',
                        fontWeight: '700',
                        textDecoration: 'none',
                    }}
                >Serie 2</Link>
                <Link
                    style={{
                        color: "#434040",
                        fontSize: '2rem',
                        fontFamily: 'Oswald',
                        fontWeight: '700',
                        textDecoration: 'none',
                    }}
                >Otros 3</Link>
            </div>
        </div>
    )
}