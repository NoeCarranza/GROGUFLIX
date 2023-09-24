import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buscar } from "../API/api";
import '../css/video.css';
import styled from "styled-components";


const Video = ({ url }) => {

    const [videos, setVideos] = useState([])

    console.log(useParams());

    const { id } = useParams()

    useEffect(() => {
        buscar(`/videos/${id}`, setVideos)
    },[])

    return (

        <div style={{backgroundColor:'black'}}>
            
                <h2 style={{fontSize:'3rem'}}>{videos.nombre}</h2>
                <h3>{videos.año}</h3>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px',
                    justifyItems: 'center',
                    justifyContent: 'center',
                    gap: '40px',
                }}>
                <h3 style={{ textAlign:'justify', width:'350px'}}>{videos.descripcion}</h3>
            <img className="poster"src={`${videos.imagen}`} style={{ width: '350px'}}></img>
            </div>
            <iframe src={`${videos.URL}`}></iframe>
            
        </div>
    )
}

export default Video