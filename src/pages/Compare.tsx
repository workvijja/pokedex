"use client"

import {useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import Section from "@/components/compare/section";
import {Separator} from "@/components/ui/separator";
import {Pokemon} from "@/app/page";
import {useSetAtom} from "jotai";
import {pokemonsAtom} from "@/atoms/pokemonsAtom";

const Compare = ({pokemons}:{pokemons:Array<Pokemon>}) => {
    const searchParams = useSearchParams()
    const setPokemons = useSetAtom(pokemonsAtom)

    useEffect(() => setPokemons(pokemons), [pokemons])

    const leftId = Number(searchParams?.get("left"))
    const rightId = Number(searchParams?.get("right"))

    return (
        <div className={"w-full h-full flex gap-4"}>
            <Section initialId={leftId} side={"left"} className={"w-full h-full"} />
            <Separator orientation={"vertical"}/>
            <Section initialId={rightId} side={"right"} className={"w-full h-full"} />
        </div>
    )
}

export default Compare