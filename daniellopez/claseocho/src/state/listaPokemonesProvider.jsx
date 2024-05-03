import { useState } from "react";
import ListaPokemonsContext from "./context";

const ListaPokemonsProvider = ({children}) => {
    const [pokemons, setPokemones] = useState([])
    const updatePokemons = (nuevoValor)=> {
        setPokemones(nuevoValor)
    }
    return (
        <ListaPokemonsContext.Provider value={{pokemons, updatePokemons}}>
            {children}
        </ListaPokemonsContext.Provider>
    )
}

export default ListaPokemonsProvider