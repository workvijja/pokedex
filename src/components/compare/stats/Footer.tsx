"use client"

import { Button } from "@/components/ui/button"
import {useAtomValue} from "jotai/index";
import {prevAndNextPokemonAtom} from "@/atoms/pokemonsAtom";

const Footer = ({id, setId=()=>{}}:Readonly<{id:number, setId?: (id:number) => void}>) => {
    const {prev, next} = useAtomValue(prevAndNextPokemonAtom(id))

    return (
        <div className={"w-full flex justify-between items-center"}>
            <Button variant={"outline"} onClick={() => setId(0)}>Back</Button>
            <div className={"flex gap-2"}>
                {prev && <Button variant={"outline"} onClick={() => setId(prev)}>Previous</Button>}
                {next && <Button variant={"outline"} onClick={() => setId(next)}>Next</Button>}
            </div>
        </div>
    )
}

export default Footer