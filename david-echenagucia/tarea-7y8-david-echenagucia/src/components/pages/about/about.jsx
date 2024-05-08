import style from './style.module.css'
import image from './image/david.jpg'
import GitHubProjectsContext from "../context";
import { Link } from "react-router-dom"
import { useContext } from "react";


const About = () => {

    const { data } = useContext(GitHubProjectsContext)


    return (
        <>
            <div className={style.containerImageAndText}>
                <div>
                    <img className={style.image} src={image} alt="Foto de perfil" />
                </div>
                <div className={style.about}>
                    <h2>David Echenagucia</h2>
                    <h3>Desarrollador Fullstack Javascript</h3>
                </div>
            </div>

            <div className={style.textdescription}>
                <div>
                    I am a graduate in International Business from Alejandro de Humboldt University, with over 4 years of experience as a freelancer.
                    My ability to efficiently manage time allows me to adapt to various work environments. Currently, I am venturing into a
                    promising career as a JavaScript Front-End Developer, with strong knowledge in Python, SQL, ORMs, and Mongoose.
                </div>
            </div>

            <Link to="/projects">Ver mas detalles</Link>
            {data.length > 0 && data.map((element) => (
                <h2>{element.name}</h2>
            ))}

        </>
    )
}

export default About;