"use client"

import {
    comparePokemonCurrentPageTotalAtom,
    comparePokemonPaginationControlAtom,
    comparePokemonTotalAtom, comparePokemonTotalPageAtom,
    PokemonSide
} from "@/atoms/comparePokemonAtom";
import PokedexPagination from "@/components/pokedex/pagination";
import {useAtom, useAtomValue} from "jotai/index";
import {limitPokemonAtom} from "@/atoms/pokemonsAtom";

const Pagination = ({side}:{side:PokemonSide}) => {
    const [page, setPage] = useAtom(comparePokemonPaginationControlAtom(side))
    const total = useAtomValue(comparePokemonTotalAtom(side))
    const limit = useAtomValue(limitPokemonAtom)
    const totalPokemon = useAtomValue(comparePokemonCurrentPageTotalAtom(side))
    const totalPage = useAtomValue(comparePokemonTotalPageAtom(side))

    return (
        <PokedexPagination.Container>
            <PokedexPagination.Showing start={limit * page + 1} end={limit * page + totalPokemon} total={total}/>
            <PokedexPagination.Navigation
                isPrev={page > 0} isNext={page < totalPage - 1} handlePrev={() => {setPage(page - 1)}} handleNext={() => {setPage(page + 1)}}
            />
        </PokedexPagination.Container>
    )
}

export default Pagination