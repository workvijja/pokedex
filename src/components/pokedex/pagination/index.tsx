"use client"

import {Button} from "@/components/ui/button";
import {useAtom, useAtomValue} from "jotai";
import {
    currentPageTotalPokemonAtom,
    limitPokemonAtom,
    paginationControlPokemonAtom, totalPagePokemonAtom,
    totalPokemonAtom
} from "@/atoms/pokemonsAtom";
import {cn} from "@/lib/utils";

const Container = ({children, className, ...props}: Readonly<{children: React.ReactNode, className?: string, [key:string]:any}>) => {
    return (
        <div className={cn("flex justify-between items-center", className)} {...props}>
            {children}
        </div>
    )
}

const Showing = ({start, end, total}: Readonly<{start:number, end:number, total:number}>) => {
    return (
        <p className={"text-xs opacity-50"}>Showing <span
            className={"font-bold"}>{start} to {end}</span> of <span
            className={"font-bold"}>{total} pokemons</span></p>
    )
}

const Navigation = ({isPrev, isNext, handlePrev, handleNext}:{isPrev:boolean, isNext:boolean, handlePrev:() => void, handleNext:() => void}) => {
    return (
        <div className={"flex gap-2"}>
            {isPrev && <Button variant={"outline"} onClick={handlePrev}>Previous</Button>}
            {isNext && <Button variant={"outline"} onClick={handleNext}>Next</Button>}
        </div>
    )
}

const Pagination = ({className, ...props}: Readonly<{ className?: string, [key: string]: any }>) => {
    const [page, setPage] = useAtom(paginationControlPokemonAtom)
    const total = useAtomValue(totalPokemonAtom)
    const limit = useAtomValue(limitPokemonAtom)
    const totalPokemon = useAtomValue(currentPageTotalPokemonAtom)
    const totalPage = useAtomValue(totalPagePokemonAtom)

    return (
        <Container>
            <Showing start={limit * page + 1} end={limit * page + totalPokemon} total={total}/>
            <Navigation isPrev={page > 0} isNext={page < totalPage - 1} handlePrev={() => {setPage(page - 1)}} handleNext={() => {setPage(page + 1)}}/>
        </Container>
    )
}

Pagination.Container = Container
Pagination.Showing = Showing
Pagination.Navigation = Navigation

export default Pagination