import { buscar } from "../API/api"
import { useState, useEffect } from "react"
import '../css/listVideos.css';

const ListaCategorias = ({ url }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        buscar(url, setCategorias)
    }, [url])

    // console.table(videos);

    return (
        <select className="option-container">
            <option value="" disabled defaultValue="" hidden> Selecionar categorias</option>
            {
                categorias.forEach(item => {
                    const { id, categoria } = item;
                    console.log(id+(" ") + categoria);
                    {<option>Holi</option>}
                })
            }
        </select>
    )
}

export default ListaCategorias