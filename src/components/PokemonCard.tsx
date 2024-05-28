"use client"

import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import PokemonTypeTag from "@/components/PokemonTypeTag";
import {AspectRatio} from "@/components/ui/aspect-ratio";

interface PokemonCardProps {
    name: string
    image: string
    types: Array<keyof PokemonTypeColors>
}

const pokemonCard = ({name, image, types}: PokemonCardProps) => {
    return (
        <div className={"w-full flex flex-col items-center border rounded-md shadow-md p-4 gap-2"}>
            <AspectRatio className={"w-full"} ratio={1}>
                <img alt={"Pokemon Image"} src={image} className={"w-full h-full"} />
            </AspectRatio>
            <h1 className={"font-bold truncate w-full text-center"} >{name}</h1>
            <div className={"flex flex-wrap justify-center gap-1"}>
                {types.map(type => <PokemonTypeTag key={type} name={type}/>)}
            </div>
        </div>
    )
}

export default pokemonCard