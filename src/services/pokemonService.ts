import {Pokemon} from "@/app/page";
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";

interface PokemonsDto {
    results: Array<{url:string}>
}

interface PokemonDto {
    id: number,
    order: number,
    name: string,
    sprites: {front_default: string},
    types: Array<{type: {name: keyof PokemonTypeColors}}>
}

const getPokemon = async ():Promise<Array<Pokemon>|undefined> => {
    try {
        const {results}:PokemonsDto = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=100000',
            {next: {revalidate: 60000}}
        ).then((res) => res.json())

        const data:Array<Pokemon> = await Promise.all(
            results.map(async ({url}):Promise<Pokemon> => (
                    await fetch(url, {next: {revalidate: 60000}})
                        .then(async (res):Promise<Pokemon> => {
                            const dto:PokemonDto = await res.json()
                            return {
                                id: dto.id,
                                order: dto.order,
                                name: dto.name,
                                image: dto.sprites.front_default,
                                types: dto.types.map(({type}) => type.name)
                            } as Pokemon
                        })
                )
            )
        )

        return data
    } catch (e) {
        console.log(e)
    }
}

export default getPokemon