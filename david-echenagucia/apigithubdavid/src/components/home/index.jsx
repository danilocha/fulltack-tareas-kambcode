import { useContext } from "react";
import GitHubProjectsContext from "../context";
import { Link } from "react-router-dom"

const Home = () => {
    const { data } = useContext(GitHubProjectsContext)
    return (
        <>
            <div> Home </div>
            <Link to="/projects">Ver mas detalles</Link>
            {data.length > 0 && data.map((element) => (
                <h2>{element.name}</h2>
            ))}
        </>
    )
}

export default Home;