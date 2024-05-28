import {atom} from "jotai"
import {Pokemon} from "@/app/page";
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import {matchSorter} from "match-sorter";

export const pokemonsAtom = atom<Array<Pokemon>|undefined>([])

export const searchPokemonAtom = atom<string>("")

export const sortAscendingPokemonAtom = atom<boolean>(true)

export const filterByTypePokemonAtom = atom<keyof PokemonTypeColors|null>(null)

// NNTI TAMBAH PAGINATION
// KEKNYA BETTER PKE CHAIN LODASH
// CEK PERLU ATOMFAMILY ATO NGGA
export const filteredPokemonAtom = atom<Array<Pokemon>|undefined>((get) => {
    const pokemons = get(pokemonsAtom)
    const search = get(searchPokemonAtom)
    const isAscending = get(sortAscendingPokemonAtom)
    const filterByType = get(filterByTypePokemonAtom)

    if (!pokemons) return []

    return matchSorter(pokemons, search, {keys: ["name"]})
        .filter((pokemon) => {
            if (!filterByType) return true
            return pokemon.types.includes(filterByType)
        })
        .sort((a, b) => {
            if (isAscending) {
                return a.name.localeCompare(b.name)
            } else {
                return b.name.localeCompare(a.name)
            }
        })
})