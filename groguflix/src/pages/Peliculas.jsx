import React from "react";
import "../css/peliculas.css";
import ListVideos from "../components/listVideos";



const Peliculas = () => {


    return (
        <div className="Peliculas">
            <div>
            <h1 style={{
                fontFamily: 'Oswald',
                color: '#ffffff',
                fontSize: '5rem',
            }}>PELICULAS DE LA SAGA</h1>
            </div>

            {/* Seccion principal */}
            <ListVideos url={"/videos"}/>

        </div>

    )
}
export default Peliculas;