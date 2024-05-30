"use client"

import {Separator} from "@/components/ui/separator";
import PokemonTypeTag from "@/components/PokemonTypeTag";
import {PokemonDetail} from "@/app/[id]/page";
import {cn} from "@/lib/utils";
import React from "react";

interface BodyProps {
    pokemonDetail: PokemonDetail,
    className?: string,

    [key: string]: any
}

const Image = ({alt = "Pokemon Image", src, className, ...props}: Readonly<{
    alt?: string,
    src: string,
    className?: string,
    [key: string]: any
}>) => {
    return (
        <img
            className={cn("w-64 h-64 md:w-96 md:h-96 object-contain", className)}
            alt={alt}
            src={src}
            {...props}
        />
    )
}

const InfoContainer = ({children, className, ...props}: Readonly<{
    children: React.ReactNode,
    className?: string,
    [key: string]: any
}>) => {
    return (
        <div className={cn("w-full h-full flex flex-col gap-2 border rounded-md shadow-md p-4", className)} {...props}>
            {children}
        </div>
    )
}

const InfoHeader = ({number, name}: Readonly<{ number: number, name: string }>) => {
    return (
        <div className={"flex justify-between items-center"}>
            <p className={"text-sm opacity-50"}>No. {number}</p>
            <h1 className={"font-bold"}>{name}</h1>
        </div>
    )
}

const InfoContentItem = ({title, children}: Readonly<{ title: string, children: React.ReactNode }>) => {
    return (
        <>
            <div className={"flex justify-start items-center"}>
                <p className={"text-sm opacity-50"}>{title}</p>
            </div>
            <div className={"flex justify-start items-center gap-2 flex-wrap"}>
                {children}
            </div>
        </>
    )
}
const InfoContent = ({children, className, ...props}: Readonly<{ children: React.ReactNode, className?: string, [key: string]: any }>) => {
    return (
        <div className={cn("grow grid grid-cols-2", className)} {...props}>
            {children}
        </div>
    )
}

const InfoDescription = ({children, className, ...props}: Readonly<{
    children: React.ReactNode,
    className?: string,
    [key: string]: any
}>) => {
    return (
        <p className={cn("text-center", className)} {...props}>{children}</p>
    )
}

const Info = ({pokemonDetail, className, ...props}: BodyProps) => {
    return (
        <InfoContainer className={className} {...props}>
            <InfoHeader number={pokemonDetail.order} name={pokemonDetail.name}/>
            <Separator orientation={"horizontal"}/>
            <InfoContent>
                <InfoContentItem title={"Type"}>
                    {pokemonDetail.types.map((type) => <PokemonTypeTag key={type} name={type}/>)}
                </InfoContentItem>
                <InfoContentItem title={"Height"}>
                    {`${pokemonDetail.height}"`}
                </InfoContentItem>
                <InfoContentItem title={"Weight"}>
                    {`${pokemonDetail.weight.toFixed(2)} Lb`}
                </InfoContentItem>
            </InfoContent>
            <Separator orientation={"horizontal"}/>
            <InfoDescription>{pokemonDetail.description}</InfoDescription>
        </InfoContainer>
    )
}

const BodyContainer = ({children, className, ...props}: Readonly<{ children: React.ReactNode, className?: string, [key: string]: any }>) => {
    return (
        <div className={cn("h-full grow flex gap-4 flex-col md:flex-row items-center", className)} {...props}>
            {children}
        </div>
    )
}

const Body = ({pokemonDetail, className, ...props}: BodyProps) => {
    return (
        <BodyContainer className={className} {...props}>
            <Image src={pokemonDetail.image}/>
            <Info pokemonDetail={pokemonDetail}/>
        </BodyContainer>
    )
}

Body.Container = BodyContainer
Body.Image = Image
Body.Info = Info

Body.InfoContainer = InfoContainer
Body.InfoHeader = InfoHeader
Body.InfoContent = InfoContent
Body.InfoContentItem = InfoContentItem
Body.InfoDescription = InfoDescription

export default Body