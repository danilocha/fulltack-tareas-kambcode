import { Link } from "react-router-dom"
import Card from "../../components/card"

const WorkExperience = () => {
    return (
        <>
            <Card titulo="mi experiencia" descripcion="esta es mi experiencia laboral" link={
                {
                    url: "/",
                    texto: "volver al home"
                }
            } />
        </>
    )
}

export default WorkExperience