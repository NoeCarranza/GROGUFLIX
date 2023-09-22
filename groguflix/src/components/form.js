import { useState } from "react"
import "./formulario.css"
import Campo from "./campo"
import ListaOpciones from "./listaopciones"
import Boton from "./boton-crear"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [URL, actualizarURL] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const {RegistrarVideo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre: nombre,
            categoria: categoria,
            URL: URL,
            descripcion:descripcion
        }
        RegistrarVideo(datosAEnviar)

    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para agregar un video de la saga</h2>
            <Campo
                titulo="Nombre del video"
                placeholder="Ingresa el nombre del video"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Descripcion"
                placeholder="Ingresa una sinopsis"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}

            />
            <Campo
                titulo="URL"
                placeholder="Ingresa el enlace de la URL"
                required
                valor={URL}
                actualizarValor={actualizarURL}
            />

            <ListaOpciones 
            valor={categoria}
            actualizarcategoria={actualizarCategoria}
            categorias={props.categorias}

            
            />
            <Boton texto="Agregar video" />
        </form>
    </section>
}

export default Formulario