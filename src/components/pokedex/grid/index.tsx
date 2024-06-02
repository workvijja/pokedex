"use client"

import {currentPagePokemonAtom} from "@/atoms/pokemonsAtom";
import {useAtomValue} from "jotai";
import Card from "@/components/pokedex/grid/Card";
import {cn} from "@/lib/utils";

const Container = ({children, className}: Readonly<{children: React.ReactNode, className?: string}>) => {
    return (
        <div className={cn("grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6", className)}>
            {children}
        </div>
    )
}

const Grid = ({handleChildClick=()=>{}}:Readonly<{ handleChildClick?: (id:number) => void }>) => {
    const pokemons = useAtomValue(currentPagePokemonAtom)

    if (!pokemons || pokemons.length === 0) return (<></>)

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
                        onClick={() => {handleChildClick(id)}}
                    />
                ))
            }
        </Container>
    )
}

Grid.Container = Container
Grid.Card = Card

export default Grid