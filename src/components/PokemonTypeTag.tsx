import {Badge} from "@/components/ui/badge";
import pokemonTypeColors, {PokemonTypeColors} from "@/constants/pokemonTypeColors";

interface PropType {
    name: keyof PokemonTypeColors
}

const pokemonTypeTag = ({name}:PropType) => {
    const color = pokemonTypeColors[name] ?? '#FFFFFF'

    return (
        <Badge variant={"default"} style={{backgroundColor: color}} >{name.toUpperCase()}</Badge>
    )
}

export default pokemonTypeTag