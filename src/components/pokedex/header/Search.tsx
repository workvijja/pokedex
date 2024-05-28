"use client"

import {Input} from "@/components/ui/input";
import { useAtom } from "jotai";
import { Search } from "lucide-react";
import {searchPokemonAtom} from "@/atoms/pokemonsAtom";
import React from "react";

// NNTI ADA KEMUNGKINAN BISA MASUKIN ATOM
// NNTI COBA PKE DEBOUNCE
const SearchInput = () => {
    const [search, setSearch] = useAtom(searchPokemonAtom)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="relative">
            <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground"/>
            <Input
                type="search"
                placeholder="Search pokemon"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                value={search}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchInput