import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>Opps, error no se encontro la pagina</h1>
            <Link to="/" >Vuelve a la pagina de inicio</Link> <br />
            <a href="/">Inicio</a>
        </div>
    )
}

export default NotFound