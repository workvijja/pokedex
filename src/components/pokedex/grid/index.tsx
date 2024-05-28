import {filteredPokemonAtom} from "@/atoms/pokemonsAtom";
import {useAtomValue} from "jotai";
import PokemonCard from "@/components/PokemonCard";

const Grid = () => {
    const pokemons = useAtomValue(filteredPokemonAtom)

    if (!pokemons) return (null)

    return (
        <div className={"grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4"}>
            {
                pokemons.map(({name, image, types}) => (
                    <div key={name} className={"col-span-1"}>
                        <PokemonCard name={name} image={image} types={types}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Grid