import { useEffect, useState, useContext } from "react"
import axios from 'axios'
import ListaPokemonsContext from "../../state/context"
import { Link } from "react-router-dom"

const Home = () => {
    const {updatePokemons} = useContext(ListaPokemonsContext)
    const [pokeData, setPokeData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setPokeData(response.data.results)
        }
        fetchData()
    }, [])
    useEffect(() => {
        updatePokemons(pokeData)
    }, [ pokeData, updatePokemons ])
    return (
        <div>
            <Link to="/mundo-pokemon">Descripcion del mundo pokemon</Link>
            <h1>Lista de pokemones</h1>
            {pokeData.length > 0 && pokeData.map((pokemon) => (
                <h2>{pokemon.name}</h2>
            ))}
        </div>
    )
}

export default Home