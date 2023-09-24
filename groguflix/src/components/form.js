import { useState } from "react"
import "./formulario.css";
import './campo.css';
import ListaCategorias from "./listacategorias";

const Formulario = (props) => {


    const GuardarDatos = (e) => {
        const [nombre, actualizarNombre] = useState("")
        const [año, actualizarAño] = useState("")
        const [descripcion, actualizarDescripcion] = useState("")
        const [foto, actualizarFoto] = useState("")
        const [URL, actualizarURL] = useState("")

        const { RegistrarVideo } = props
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            año: año,
            descripcion: descripcion,
            foto: foto,
            URL: URL,

        }
        console.log(datosAEnviar)
        // RegistrarPersonaje(datosAEnviar)


    }


    return <section className="formulario">

        <form>
            <h2>Rellena el formulario para agregar un video de la saga</h2>
            <input name="nombre"
                titulo="Nombre del video"
                placeholder="Ingresa el nombre del video"
                required
            />
            <input name="descripcion"
                titulo="Descripcion"
                placeholder="Ingresa una sinopsis"
                required
            />
            <input name="imagen"
                titulo="imagen"
                placeholder="Ingresa el enlace de la imagen del video"
                required
            />
            <input name="URL"
                titulo="URL"
                placeholder="Ingresa el enlace de la URL"
                required
            />
            
            <ListaCategorias url={"/categorias/"} />

            <button className="boton">AGREGAR VIDEO</button>
        </form>
    </section>
}


export default Formulario