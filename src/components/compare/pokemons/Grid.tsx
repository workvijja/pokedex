"use client"

import {comparePokemonCurrentPageAtom, PokemonSide} from "@/atoms/comparePokemonAtom";
import PokedexGrid from "@/components/pokedex/grid";
import {useAtomValue} from "jotai";

const Grid = ({side, setId}:{side:PokemonSide, setId:(id:number) => void}) => {
    const pokemons = useAtomValue(comparePokemonCurrentPageAtom(side))

    if (!pokemons) return (<></>)

    return (
        <PokedexGrid.Container className={"sm:grid-cols-3 md:grid-cols-4"}>
            {
                pokemons.map(({id, name, image, types}) => (
                    <PokedexGrid.Card
                        key={id}
                        className={"col-span-1"}
                        name={name}
                        image={image}
                        types={types}
                        onClick={() => {setId(id)}}
                    />
                ))
            }
        </PokedexGrid.Container>
    )
}

export default Grid