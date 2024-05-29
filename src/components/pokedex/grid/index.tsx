"use client"

import {currentPagePokemonAtom} from "@/atoms/pokemonsAtom";
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
    const pokemons = useAtomValue(currentPagePokemonAtom)

    // error
    if (!pokemons) return (<></>)

    // empty
    if (pokemons.length === 0) return (<></>)

    return (
        <Container>
            {
                pokemons.map(({id, name, image, types}) => (
                    <Card
                        key={id}
                        className={"col-span-1"}
                        name={name}
                        image={image}
                        types={types}
                        onClick={() => {console.log(id, name)}}
                    />
                ))
            }
        </Container>
    )
}

Grid.Container = Container

export default Grid