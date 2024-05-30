import Pokedex from '@/pages/Pokedex'
import { Suspense } from 'react'
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import getPokemon from "@/services/pokemonService";

export interface Pokemon {
    id: number,
    order: number,
    name: string,
    image: string,
    types: Array<keyof PokemonTypeColors>
}

const PokemonPage = async ({}) => {
    const pokemons = await getPokemon()

    return (
        <Pokedex pokemons={pokemons} />
    )
}

const page = ({}) => {
    // TODO CREATE SKELETON
    return (
        <Suspense>
            <PokemonPage/>
        </Suspense>
    )
}

export default page