"use client"

import {Button} from "@/components/ui/button";
import {PrimitiveAtom, useAtom} from "jotai";
import {filterByTypePokemonAtom} from "@/atoms/pokemonsAtom";
import {PokemonTypeColors, pokemonTypeColorsKeys} from "@/constants/pokemonTypeColors";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Filter as FilterIcon} from "lucide-react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const Filter = ({atom=filterByTypePokemonAtom}:{atom?:PrimitiveAtom<keyof PokemonTypeColors|null>}) => {
    const [filter, setFilter] = useAtom(atom)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter <FilterIcon className={"ml-1 w-4 h-4"} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <ScrollArea className={"h-[200px]"}>
                    <div>
                        {pokemonTypeColorsKeys.map((type) => (
                            <DropdownMenuCheckboxItem
                                key={type}
                                checked={filter === type}
                                onCheckedChange={() => {
                                    filter === type
                                        ? setFilter(null)
                                        : setFilter(type)
                                }}
                            >
                                {type}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </div>
                    <ScrollBar orientation={"vertical"} />
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Filter