"use client"

import PokedexHeader from "@/components/pokedex/header"
import {
    comparePokemonFilterByTypeAtom,
    comparePokemonSearchAtom,
    comparePokemonSortAscendingAtom,
    PokemonSide
} from "@/atoms/comparePokemonAtom";

const Header = ({side}:{side:PokemonSide}) => {
    return (
        <PokedexHeader.Container>
            <PokedexHeader.Search atom={comparePokemonSearchAtom(side)} />
            <PokedexHeader.RightContainer>
                <PokedexHeader.Sort atom={comparePokemonSortAscendingAtom(side)} />
                <PokedexHeader.Filter atom={comparePokemonFilterByTypeAtom(side)} />
            </PokedexHeader.RightContainer>
        </PokedexHeader.Container>
    )
}

export default Header