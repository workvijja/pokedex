import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import PokemonTypeTag from "@/components/PokemonTypeTag";
import Image from "next/image"

interface PokemonCardProps {
    name: string
    image: string
    types: Array<keyof PokemonTypeColors>
}

const pokemonCard = ({name, image, types}: PokemonCardProps) => {
    return (
        <div className={"flex flex-col items-center border rounded-md shadow-md p-4 gap-2"}>
            <Image alt={"Pokemon Image"} src={image} width={200} height={200} className={"border"} />
            <h1 className={"font-bold"} >{name}</h1>
            <div className={"flex flex-wrap justify-center"}>
                {types.map(type => <PokemonTypeTag key={type} name={type}/>)}
            </div>
        </div>
    )
}

export default pokemonCard