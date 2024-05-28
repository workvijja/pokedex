"use client"

import {filteredPokemonAtom} from "@/atoms/pokemonsAtom";
import {useAtomValue} from "jotai";
import Card from "@/components/pokedex/grid/Card";

const Container = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6"}>
            {children}
        </div>
    )
}

const Grid = () => {
    const pokemons = useAtomValue(filteredPokemonAtom)

    if (!pokemons) return (<></>)

    return (
        <Container>
            {
                pokemons.map(({name, image, types}) => (
                    <Card
                        key={name}
                        className={"col-span-1"}
                        name={name}
                        image={image}
                        types={types}
                    />
                ))
            }
        </Container>
    )
}

Grid.Container = Container

export default Grid