import "./listaopciones.css"

const ListaOpciones = (props) =>{
    const equipos = [
        
        "Pelicula",
        "Serie",
        "Otros"
    ]

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarequipo(e.target.value)
    } 

    return <div className="lista-opciones" onChange={manejarCambio}>
        <label>Categoría</label>
        <select value={props.valor}>
            <option value="" disabled defaultValue="" hidden> Selecione la categoría</option>
            { equipos.map((equipo,index) => <option key={index}  value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones