"use client"

import {Button} from "@/components/ui/button";
import {PrimitiveAtom, useAtom} from "jotai";
import {sortAscendingPokemonAtom} from "@/atoms/pokemonsAtom";
import {ArrowDown01, ArrowUp01} from "lucide-react";

const Sort = ({atom=sortAscendingPokemonAtom}:{atom?:PrimitiveAtom<boolean>}) => {
    const [sortAscending, setSortAscending] = useAtom(atom)

    const icon = sortAscending
        ? <ArrowDown01 className={"ml-1 w-4 h-4"} />
        : <ArrowUp01 className={"ml-1 w-4 h-4"} />

    const handleClick = () => {
        setSortAscending((prev) => !prev)
    }

    return (
        <Button variant="outline" onClick={handleClick}>Sort {icon}</Button>
    )
}

export default Sort