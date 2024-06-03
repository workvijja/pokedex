import React, { Suspense } from 'react'
import {PokemonTypeColors} from "@/constants/pokemonTypeColors";
import getPokemonDetail from "@/services/pokemonDetailService";
import {notFound} from "next/navigation";
import Body from "@/components/detail/body";
import Footer from "@/components/detail/footer";
import {Skeleton} from "@/components/ui/skeleton";

export interface PokemonStats {
    hp: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number
}

export interface PokemonDetail {
    id: number,
    order: number,
    name: string,
    image: string,
    types: Array<keyof PokemonTypeColors>,
    sound: string,
    height: number,
    weight: number,
    stats: PokemonStats,
    description: string
}

const PokemonDetailPage = async ({id}:{id:number}) => {
    const pokemonDetail = await getPokemonDetail(id)

    if (!pokemonDetail) notFound()

    return (
        <div className={"flex flex-col gap-4 w-full h-full"}>
            <Body pokemonDetail={pokemonDetail}/>
            <Footer/>
        </div>
    )
}

const DetailSkeleton = () => {
    return (
        <div className={"flex flex-col gap-4 w-full h-full"}>
            <div className={"h-full grow flex gap-4 flex-col md:flex-row items-center"}>
                <Skeleton className={"w-64 h-64 md:w-96 md:h-96 rounded-md"}/>
                <Skeleton className={"w-full h-full rounded-md"}/>
            </div>
            <div className={"flex justify-between items-center"}>
                <Skeleton className={"w-32 h-8 rounded-md"}/>
                <div className={"flex gap-2"}>
                    <Skeleton className={"w-16 h-8 rounded-md"}/>
                    <Skeleton className={"w-16 h-8 rounded-md"}/>
                </div>
            </div>
        </div>
    )
}

const page = ({params: {id}}: { params: { id: number } }) => {
    return (
        <Suspense fallback={<DetailSkeleton/>}>
            <PokemonDetailPage id={id}/>
        </Suspense>
    )
}

export default page