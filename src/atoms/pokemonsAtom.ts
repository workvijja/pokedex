import {atom, WritableAtom} from "jotai"
import {Pokemon} from "@/app/page";
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import {matchSorter} from "match-sorter";
import {chunk, filter, clamp} from "lodash";
import {atomFamily} from "jotai/utils";

export const pokemonsAtom = atom<Array<Pokemon>>([])

export const totalPokemonAtom = atom<number>((get) => get(searchedPokemonAtom)?.length || 0)

export const searchPokemonAtom = atom<string>("")

export const sortAscendingPokemonAtom = atom<boolean>(true)

export const filterByTypePokemonAtom = atom<keyof PokemonTypeColors|null>(null)

const paginationPokemonAtom = atom<number>(0)

export const paginationControlPokemonAtom:WritableAtom<number, [page:number], any> = atom(
    (get) => get(paginationPokemonAtom),
    (get, set, page) => {
        set(paginationPokemonAtom, clamp(0, page, get(totalPagePokemonAtom) - 1))
    }
)

export const limitPokemonAtom = atom<number>(20)

const filteredPokemonAtom = atom<Array<Pokemon>>((get) => {
    const pokemons = get(pokemonsAtom)
    const filterByType = get(filterByTypePokemonAtom)

    // if (!pokemons) return undefined

    return filter(pokemons, (pokemon) => {
        if (!filterByType) return true
        return pokemon.types.includes(filterByType)
    })
})

const searchedPokemonAtom = atom<Array<Pokemon>>((get) => {
    const pokemons = get(filteredPokemonAtom)
    const search = get(searchPokemonAtom)
    const isAscending = get(sortAscendingPokemonAtom)

    // if (!pokemons) return undefined

    return matchSorter(pokemons, search, {keys: ["name"], sorter: (arr) => isAscending ? arr : arr.reverse()})
})

const paginatedPokemonAtom = atom<Array<Array<Pokemon>>>((get) => {
    const pokemons = get(searchedPokemonAtom)
    const limit = get(limitPokemonAtom)
    // if (!pokemons) return undefined
    return chunk(pokemons, limit)
})

export const totalPagePokemonAtom = atom<number>((get) => {
    const paginatedPokemon = get(paginatedPokemonAtom)
    if (!paginatedPokemon) return 0
    return paginatedPokemon.length
})

export const currentPagePokemonAtom = atom<Array<Pokemon>|undefined>((get) => {
    const paginatedPokemon = get(paginatedPokemonAtom)
    // if (!paginatedPokemon) return undefined
    const activePage:number = clamp(0, get(paginationPokemonAtom), get(totalPagePokemonAtom) - 1)
    return paginatedPokemon[activePage]
})

export const currentPageTotalPokemonAtom = atom<number>((get) => get(currentPagePokemonAtom)?.length || 0)

export const prevAndNextPokemonAtom = atomFamily((id:number) => atom((get) => {
    const pokemons = get(pokemonsAtom)

    // if (!pokemons) return {prev: null, next:null}

    const index = pokemons.findIndex((pokemon) => pokemon.id === id)

    return {
        prev: index > 0 ? pokemons[index - 1].id : null,
        next: index < pokemons.length - 1 ? pokemons[index + 1].id : null
    }
}))