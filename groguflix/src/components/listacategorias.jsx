import { buscar } from "../API/api"
import { useState, useEffect } from "react"
import './campo.css';

const ListaCategorias = ({ url }) => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        buscar(url, setCategorias)
    }, [url])

    // console.table(videos);

//     return (
//             <select className="sel-cat">
//                 <option> Selecionar categoria</option>
//                 {
//                     categorias.forEach(item => {
//                         const { id, categoria } = item;
//                         console.log(id + (" ") + categoria);
//                     })
//                 }
//             </select>
//     )
// }

    return (
        <select className="sel-cat">
            <option>Seleccionar categoría</option>
            {categorias.map(item => (
                <option key={item.id} value={item.id}>{item.categoria}</option>
            ))}
        </select>
    );
}

export default ListaCategorias;