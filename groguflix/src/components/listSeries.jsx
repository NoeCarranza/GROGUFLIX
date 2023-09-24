import { buscar } from "../API/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../css/listVideos.css'


const ListaSeries = ({ url }) => {
const [videos, setVideos] = useState([])

    useEffect(()=> {
        buscar(url, setVideos)
    }, [url])

    // console.table(videos);

    return(
        <section className="videos-container">
            {
                videos.filter((item)=> item.categoria==='series').map( video =>{
                    const { id,nombre, año,duracion,imagen,categoria,URL} = video;
                    return(
                        <Link to={`/videos/${id}`}style={{ textDecoration:'none'}} key={id}>
                            <div className="cajas">
                        <img src={`${imagen}`}></img>
                        <div>
                        <h2>{nombre}</h2>
                        <h3>{año}</h3>
                        </div>
                        </div>
                        </Link>
                    )
                })
            }

        </section>
    )
}

export default ListaSeries