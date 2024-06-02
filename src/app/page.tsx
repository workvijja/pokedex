import React, { Suspense } from 'react'
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import getPokemon from "@/services/pokemonService";
import Header from "@/components/pokedex/header";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import Pagination from "@/components/pokedex/pagination";
import PokemonsGrid from "@/app/_components/PokemonsGrid";
import {range} from "lodash";
import {Skeleton} from "@/components/ui/skeleton";

export interface Pokemon {
    id: number,
    order: number,
    name: string,
    image: string,
    types: Array<keyof PokemonTypeColors>
}

const ScrollContainer = ({children, className, ...props}: Readonly<{children: React.ReactNode, className?: string, [key:string]:any}>) => {
    return (
        <ScrollArea className={className} {...props}>
            {children}
            <ScrollBar orientation={"vertical"}/>
        </ScrollArea>
    )
}

const Pokemons = async ({}) => {
    const pokemons = await getPokemon()

    if (!pokemons) return (
        <div className={"grow flex justify-center items-center"}>
            <p className={"text-sm opacity-50"}>Failed to catch all pokemons. Tap to retry</p>
        </div>
    )

    return (
        <ScrollContainer className={"grow"}>
            <PokemonsGrid pokemons={pokemons} />
        </ScrollContainer>
    )
}

const GridSkeleton = () => {
    return (
        <ScrollContainer className={'grow'}>
            <div className={"grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6"}>
                {range(20).map((i) => <Skeleton key={i} className={"col-span-1 h-48"} />)}
            </div>
        </ScrollContainer>
    )
}

const page = ({}) => {
    return (
        <div className={"h-full flex flex-col gap-4"}>
            <Header className={"shrink"} />
            <Suspense fallback={<GridSkeleton/>}>
                <Pokemons/>
            </Suspense>
            <Pagination className={"shrink"} />
        </div>
    )
}

export default page