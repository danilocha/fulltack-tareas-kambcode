import { useContext } from "react"
import GitHubProjectsContext from "../context"


const Projects = () => {
    const { data } = useContext(GitHubProjectsContext)
    return (
        <>
            <div>Projects</div>
            {data.length > 0 && data.map(element => (
                <div>
                    <h2>{element.name}</h2>
                    <p>{element.description}</p>
                </div>
            ))}
        </>

    )
}

export default Projects