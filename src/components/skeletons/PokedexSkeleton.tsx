import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import {range} from "lodash";

const HeaderSkeleton = () => {
    return (
        <div className={"flex justify-between items-center"}>
            <Skeleton className={"w-64 h-8 rounded-md"} />
            <div className={"flex gap-2"}>
                <Skeleton className={"w-16 h-8 rounded-md"} />
                <Skeleton className={"w-16 h-8 rounded-md"} />
            </div>
        </div>
    )
}

const GridSkeleton = () => {
    return (
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6"}>
            {range(20).map((i) => <Skeleton key={i} className={"col-span-1 h-64"} />)}
        </div>
    )
}

const PaginationSkeleton = () => {
    return (
        <div className={"flex justify-between items-center"}>
            <Skeleton className={"w-32 h-4 rounded-md"} />
            <div className={"flex gap-2"}>
                <Skeleton className={"w-16 h-8 rounded-md"} />
                <Skeleton className={"w-16 h-8 rounded-md"} />
            </div>
        </div>
    )
}

const PokedexSkeleton = () => {
    return (
        <div className={"h-full flex flex-col gap-4"}>
            <HeaderSkeleton />
            <ScrollArea className={"grow"}>
                <GridSkeleton />
                <ScrollBar orientation={"vertical"}/>
            </ScrollArea>
            <PaginationSkeleton />
        </div>
    )
}

export default PokedexSkeleton