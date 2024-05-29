"use client"

import {Button} from "@/components/ui/button";
import {useAtom, useAtomValue} from "jotai";
import {
    currentPageTotalPokemonAtom,
    limitPokemonAtom,
    paginationControlPokemonAtom,
    totalPokemonAtom
} from "@/atoms/pokemonsAtom";

const Pagination = () => {
    const [page, setPage] = useAtom(paginationControlPokemonAtom)
    const total = useAtomValue(totalPokemonAtom)
    const limit = useAtomValue(limitPokemonAtom)
    const totalPokemon = useAtomValue(currentPageTotalPokemonAtom)

    return (
        <div className={"flex justify-between items-center"}>
            <p className={"text-xs opacity-50"}>Showing <span className={"font-bold"}>{limit * page + 1} to {limit * page + totalPokemon}</span> of <span className={"font-bold"}>{total} pokemons</span></p>
            <div className={"flex gap-2"}>
                <Button variant={"outline"} disabled={false} onClick={()=>{setPage(page - 1)}}>Previous</Button>
                <Button variant={"outline"} disabled={false} onClick={()=>{setPage(page + 1)}}>Next</Button>
            </div>
        </div>
    )
}

export default Pagination