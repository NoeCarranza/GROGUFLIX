import { buscar } from "../API/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../css/listVideos.css'

const ListVideos = ({ url }) => {
    const [videos, setVideos] = useState([])

    useEffect(()=> {
        buscar(url, setVideos)
    }, [url])

    return(
        <section className="videos-container">
            {
                videos.map( video =>{
                    const { id,nombre, año,duracion,imagen} = video;
                    return(
                        <Link to={`/peliculas/${id}`}style={{ textDecoration:'none'}}>
                            <div className="cajas">
                        <img src={`${imagen}`} className="imagenespeli"></img>
                        <h2 className="titulo-video">{nombre}</h2>
                        <h3 className="texto-video">{año}</h3>
                        <h4 className="parrafo-video">{duracion}</h4>
                        </div>
                        </Link>
                    )
                })
            }

        </section>
    )
}

export default ListVideos