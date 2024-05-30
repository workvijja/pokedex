"use client"

import Stats from "@/components/compare/stats";
import {useState} from "react";
import Pokemons from "@/components/compare/pokemons";
import {PokemonSide} from "@/atoms/comparePokemonAtom";

const Section = ({initialId, side, className, ...props}:Readonly<{ initialId: number, side:PokemonSide, className:string, [key:string]: any }>) => {
    const [id, setId] = useState<number>(initialId)

    return (
        <div className={className} {...props}>
            {
                id
                    ? <Stats id={id} setId={setId} />
                    : <Pokemons side={side} setId={setId}/>
            }
        </div>
    )
}

export default Section