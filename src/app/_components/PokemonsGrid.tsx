"use client"

import {Pokemon} from "@/app/page";
import {useSetAtom} from "jotai/index";
import {pokemonsAtom} from "@/atoms/pokemonsAtom";
import {useEffect} from "react";
import Grid from "@/components/pokedex/grid";
import {useRouter} from "next/navigation";

const PokemonsGrid = ({pokemons}: Readonly<{pokemons: Array<Pokemon>}>) => {
    const router = useRouter()
    const setPokemons = useSetAtom(pokemonsAtom)

    const detail = (id:number) => router.push(`/${id}`)

    useEffect(() => {
        setPokemons(pokemons)
    }, [pokemons])

    return (
        <Grid handleChildClick={detail} />
    )
}

export default PokemonsGrid