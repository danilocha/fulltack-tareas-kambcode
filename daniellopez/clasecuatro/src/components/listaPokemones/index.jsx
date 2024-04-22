import { useEffect, useState } from "react"
import styleListaPokemones from "./style.module.css"

const Pokemones = () => {
    const [contador, setContador] = useState(0)
    const [listaPokemons, setListaPokemons] = useState({})

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setListaPokemons(data))
    }, [])

    useEffect(() => {
        setContador(listaPokemons.count)
    }, [listaPokemons])

    return (
        <div className={styleListaPokemones.contenedor}>
            <h1>cantidad de pokemones {contador}</h1>
            <div className={styleListaPokemones["contenedor-pokemones"]}>
                {listaPokemons && listaPokemons.results && listaPokemons.results.map((pokemon) => (
                    <div key={pokemon.name}>
                        <h2>{pokemon.name}</h2>
                        <a href={pokemon.url}>Mas informacion</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pokemones