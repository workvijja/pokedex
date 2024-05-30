"use client"

import Header from "@/components/compare/pokemons/Header";
import {PokemonSide} from "@/atoms/comparePokemonAtom";
import Grid from "@/components/compare/pokemons/Grid";
import Pagination from "@/components/compare/pokemons/Pagination";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const Pokemons = ({side, setId}:{side:PokemonSide, setId:(id:number) => void}) => {
    return (
        <div className={"w-full h-full flex flex-col gap-4"}>
            <Header side={side} />
            <ScrollArea className={"grow"}>
                <Grid side={side} setId={setId}/>
                <ScrollBar orientation={"vertical"}/>
            </ScrollArea>
            <Pagination side={side}/>
        </div>
    )
}

export default Pokemons