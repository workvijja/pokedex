import {Suspense} from "react";
import Compare from "@/pages/Compare";
import getPokemon from "@/services/pokemonService";

const ComparePage = async () => {
    const pokemons = await getPokemon()

    if (!pokemons) return null

    return (
        <Compare pokemons={pokemons}/>
    )
}

const Page = () => {
    return (
        <Suspense>
            <ComparePage />
        </Suspense>
    )
}

export default Page