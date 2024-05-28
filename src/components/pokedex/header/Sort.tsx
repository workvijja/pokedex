import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {sortAscendingPokemonAtom} from "@/atoms/pokemonsAtom";
import {ArrowUpAZ, ArrowDownAZ} from "lucide-react";

const Sort = () => {
    const [sortAscending, setSortAscending] = useAtom(sortAscendingPokemonAtom)

    const icon = sortAscending
        ? <ArrowDownAZ className={"ml-1 w-4 h-4"} />
        : <ArrowUpAZ className={"ml-1 w-4 h-4"} />

    const handleClick = () => {
        setSortAscending((prev) => !prev)
    }

    return (
        <Button variant="outline" onClick={handleClick}>Sort {icon}</Button>
    )
}

export default Sort