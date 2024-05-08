import { useContext } from "react"
import ListaPokemonsContext from "../../state/context"
const MundoPokemon = () => {
    const {pokemons} = useContext(ListaPokemonsContext)
    return (
        <>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nulla nemo est et natus, rem temporibus! Iure aperiam nobis nihil, neque ex dicta eum voluptatibus eaque iusto quos ipsa omnis?</div>
            {pokemons.map((pokemon) => (
                <p>{pokemon.name}</p>
            ))}
        </>
    )
}
export default MundoPokemon