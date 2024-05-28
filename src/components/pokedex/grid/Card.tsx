"use client"

import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import PokemonTypeTag from "@/components/PokemonTypeTag";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {cn} from "@/lib/utils";
import React from "react";

interface CardProps {
    name: string
    image: string
    types: Array<keyof PokemonTypeColors>
    [key: string]: any
}

interface CardContainerProps {
    children: React.ReactNode
    className?: string
    [key: string]: any
}

const Container = ({children, className, ...props}: Readonly<CardContainerProps>) => {
    return (
        <div
            className={cn(
                "w-full flex flex-col items-center border rounded-md shadow-md p-4 gap-2",
                "transition ease-in-out duration-300 hover:shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

// CEK ADA KEMUNGKINAN NULL GA BUAT FALLBACK
const Image = ({src, alt="Pokemon Image"}:Readonly<{src:string;alt?:string}>) => {
    return (
        <AspectRatio className={"w-full"} ratio={1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={alt} src={src} className={"w-full h-full"}/>
        </AspectRatio>
    )
}

const Name = ({children}:Readonly<{children: React.ReactNode}>) => {
    return (
        <h1 className={"font-bold truncate w-full text-center"}>{children}</h1>
    )
}

const Types = ({types}:Readonly<{types:Array<keyof PokemonTypeColors>}>) => {
    return (
        <div className={"flex flex-wrap justify-center gap-1"}>
            {types.map(type => <PokemonTypeTag key={type} name={type}/>)}
        </div>
    )
}

const Card = ({name, image, types, className, ...props}: CardProps) => {
    return (
        <Container className={className} {...props}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src={image}/>
            <Name>{name}</Name>
            <Types types={types}/>
        </Container>
    )
}

Card.Container = Container
Card.Image = Image
Card.Name = Name
Card.Types = Types

export default Card