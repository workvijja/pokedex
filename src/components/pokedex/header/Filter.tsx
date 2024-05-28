import {Button} from "@/components/ui/button";
import {useAtom} from "jotai";
import {filterByTypePokemonAtom} from "@/atoms/pokemonsAtom";
import {pokemonTypeColorsKeys} from "@/constants/pokemonTypeColors";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Filter as FilterIcon} from "lucide-react"
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";

const Filter = () => {
    const [filter, setFilter] = useAtom(filterByTypePokemonAtom)

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