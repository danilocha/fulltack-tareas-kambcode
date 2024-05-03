import { Link } from "react-router-dom"
import estilos from './estilos.module.css'

const Card = (props) => {
    const titulo = props.titulo
    const descripcion = props.descripcion
    const link = props.link
    return (
        <div className={estilos.contenedor}>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <Link to={link.url}>{link.texto}</Link>
        </div>
    )
}

export default Card