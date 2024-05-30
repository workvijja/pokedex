import {atom, WritableAtom} from "jotai"
import {Pokemon} from "@/app/page";
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import {matchSorter} from "match-sorter";
import {chunk, filter, clamp} from "lodash";
import {atomFamily} from "jotai/utils";
import {
    limitPokemonAtom, pokemonsAtom,
} from "@/atoms/pokemonsAtom";

export type PokemonSide = "left" | "right"

export const comparePokemonSearchAtom = atomFamily((side:PokemonSide) => atom<string>(""))

export const comparePokemonSortAscendingAtom = atomFamily((side:PokemonSide) => atom<boolean>(true))

export const comparePokemonFilterByTypeAtom = atomFamily((side:PokemonSide) => atom<keyof PokemonTypeColors|null>(null))

const comparePokemonPaginationAtom = atomFamily((side:PokemonSide) => atom<number>(0))

export const comparePokemonPaginationControlAtom = atomFamily((side:PokemonSide) => atom(
    (get) => get(comparePokemonPaginationAtom(side)),
    (get, set, page:number) => {
        set(comparePokemonPaginationAtom(side), clamp(0, page, get(comparePokemonTotalPageAtom(side)) - 1))
    }
))

const comparePokemonFilteredAtom = atomFamily((side:PokemonSide) => atom<Array<Pokemon>|undefined>((get) => {
    const pokemons = get(pokemonsAtom)
    const filterByType = get(comparePokemonFilterByTypeAtom(side))

    if (!pokemons) return undefined

    return filter(pokemons, (pokemon) => {
        if (!filterByType) return true
        return pokemon.types.includes(filterByType)
    })
}))

const comparePokemonSearchedAtom = atomFamily((side:PokemonSide) => atom<Array<Pokemon>|undefined>((get) => {
    const pokemons = get(comparePokemonFilteredAtom(side))
    const search = get(comparePokemonSearchAtom(side))
    const isAscending = get(comparePokemonSortAscendingAtom(side))

    if (!pokemons) return undefined

    return matchSorter(pokemons, search, {keys: ["name"], sorter: (arr) => isAscending ? arr : arr.reverse()})
}))

const comparePokemonPaginatedAtom = atomFamily((side:PokemonSide) => atom<Array<Array<Pokemon>>|undefined>((get) => {
    const pokemons = get(comparePokemonSearchedAtom(side))
    const limit = get(limitPokemonAtom)
    if (!pokemons) return undefined
    return chunk(pokemons, limit)
}))

export const comparePokemonTotalPageAtom = atomFamily((side:PokemonSide) => atom<number>((get) => {
    const paginatedPokemon = get(comparePokemonPaginatedAtom(side))
    if (!paginatedPokemon) return 0
    return paginatedPokemon.length
}))

export const comparePokemonCurrentPageAtom = atomFamily((side:PokemonSide) => atom<Array<Pokemon>|undefined>((get) => {
    const paginatedPokemon = get(comparePokemonPaginatedAtom(side))
    if (!paginatedPokemon) return undefined
    const activePage:number = clamp(0, get(comparePokemonPaginationAtom(side)), get(comparePokemonTotalPageAtom(side)) - 1)
    return paginatedPokemon[activePage]
}))

export const comparePokemonCurrentPageTotalAtom = atomFamily((side:PokemonSide) => atom<number>((get) => get((comparePokemonCurrentPageAtom(side)))?.length || 0))

export const comparePokemonTotalAtom = atomFamily((side:PokemonSide) => atom<number>((get) => get(comparePokemonSearchedAtom(side))?.length || 0))
