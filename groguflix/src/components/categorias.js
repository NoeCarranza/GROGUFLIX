import "./listaopciones.css"

const Categorias = (props) =>{

const manejarCambio = (e) => {

} 

return <div className="lista-opciones" onChange={manejarCambio}>
    <label>Equipos</label>
    <select value={props.valor}>
        <option value="" disabled defaultValue="" hidden> Seleecionar categorias</option>
        {/* { videos.map((categoria) => 
            <option key={index}  
            value={categoria}>
            {categoria}
            </option>)} */}
    </select>
</div>
}

export default Categorias


