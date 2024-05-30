import {PokemonDetail} from "@/app/[id]/page";
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";

interface PokemonDetailDto {
    id: number,
    order: number,
    name: string,
    sprites: {front_default: string},
    types: Array<{type: {name: keyof PokemonTypeColors}}>,
    cries: {latest: string},
    height: number,
    weight: number,
    species: {url: string}
    stats: Array<{base_stat: number, stat: {name: string}}>
}

const getPokemonDetail = async (id:number):Promise<PokemonDetail|undefined> => {
    try {
        const results:PokemonDetailDto = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`,
            {next: {revalidate: 60000}}
        ).then((res) => res.json())

        const description:string = await fetch(
            results.species.url,
            {next: {revalidate: 60000}}
        ).then(async (res) => {
            const species = await res.json()
            return species.flavor_text_entries[0].flavor_text
        })

        const data:PokemonDetail = {
            id: results.id,
            order: results.order,
            name: results.name,
            image: results.sprites.front_default,
            types: results.types.map(({type}) => type.name),
            sound: results.cries.latest,
            height: results.height,
            weight: results.weight,
            description: description,
            stats: {
                hp: results.stats[0].base_stat,
                attack: results.stats[1].base_stat,
                defense: results.stats[2].base_stat,
                special_attack: results.stats[3].base_stat,
                special_defense: results.stats[4].base_stat,
                speed: results.stats[5].base_stat
            }
        }

        return data
    } catch (e) {
        console.log(e)
    }
}

export default getPokemonDetail