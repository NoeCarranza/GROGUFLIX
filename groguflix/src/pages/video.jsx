import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../API/api";
import '../css/listVideos.css';
import '../css/peliculas.css';


const Video = ({ url }) => {

    const [videos, setVideos] = useState({})

    const { id } = useParams()

    useEffect(() => {
        buscar(`/peliculas/${id}`, setVideos)
    })

    return (

        <main className="video-container">
            <div>
                <h2 className="titulo">{videos.nombre}</h2>
                <h3>{videos.año}</h3>
                {/* <h3>{descripcion}</h3>
            <img src={`${imagen}`}></img>
            <video src={`${URL}`}></video> */}

            </div>

        </main>
    )
}

export default Video