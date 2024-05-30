import { Suspense } from 'react'
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import Detail from "@/pages/Detail";
import getPokemonDetail from "@/services/pokemonDetailService";

export interface PokemonStats {
    hp: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number
}

export interface PokemonDetail {
    id: number,
    order: number,
    name: string,
    image: string,
    types: Array<keyof PokemonTypeColors>,
    sound: string,
    height: number,
    weight: number,
    stats: PokemonStats,
    description: string
}

const PokemonDetailPage = async ({id}:{id:number}) => {
    const pokemonDetail = await getPokemonDetail(id)

    // TODO REDIRECT TO 404
    if (!pokemonDetail) return null

    return (
        <Detail pokemonDetail={pokemonDetail} />
    )
}

const page = ({params:{id}}:{params:{id:number}}) => {
    // TODO CREATE SKELETON
    return (
        <Suspense>
            <PokemonDetailPage id={id} />
        </Suspense>
    )
}

export default page