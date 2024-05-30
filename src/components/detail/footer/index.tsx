"use client"

import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";
import {prevAndNextPokemonAtom} from "@/atoms/pokemonsAtom";
import {useAtomValue} from "jotai";

const Footer = () => {
    const router = useRouter()
    const params = useParams<{id:string}>()
    const id = Number(params?.id)
    const {prev, next} = useAtomValue(prevAndNextPokemonAtom(id))

    const compareWith = () => router.push(`/compare?left=${id}`)
    const detail = (id:number|null) => {
        if (id === null) return
        router.push(`/${id}`)
    }

    return (
        <div className={"flex justify-between items-center"}>
            <Button onClick={compareWith}>Compare with</Button>
            <div className={"flex gap-2"}>
                {prev && <Button variant={"outline"} onClick={() => detail(prev)}>Previous</Button>}
                {next && <Button variant={"outline"} onClick={() => detail(next)}>Next</Button>}
            </div>
        </div>
    )
}

export default Footer