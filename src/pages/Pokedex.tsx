"use client"

import {Pokemon} from "@/app/page";
import {useSetAtom} from "jotai";
import {pokemonsAtom} from "@/atoms/pokemonsAtom";
import Header from "@/components/pokedex/header";
import Grid from "@/components/pokedex/grid";
import Pagination from "@/components/pokedex/pagination";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

interface PokedexProps {
    pokemons: Array<Pokemon> | undefined
}

const Pokedex = ({pokemons}:PokedexProps) => {
    const router = useRouter()
    const setPokemons = useSetAtom(pokemonsAtom)

    const detail = (id:number) => router.push(`/${id}`)

    useEffect(() => {
        setPokemons(pokemons)
    }, [pokemons])

    return (
        <div className={"h-full flex flex-col gap-4"}>
            <Header className={"shrink"} />
            <ScrollArea className={"grow"}>
                <Grid handleChildClick={detail} />
                <ScrollBar orientation={"vertical"}/>
            </ScrollArea>
            <Pagination className={"shrink"} />
        </div>
    )
}

export default Pokedex