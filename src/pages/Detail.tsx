"use client"

import {PokemonDetail} from "@/app/[id]/page";
import Footer from "@/components/detail/footer";
import Body from "@/components/detail/body";

const Detail = ({pokemonDetail}: Readonly<{pokemonDetail: PokemonDetail}>) => {
    // TAMBAHIN LOGIC PLAY SOUND DISINI
    return (
        <div className={"flex flex-col gap-4 w-full h-full"}>
            <Body pokemonDetail={pokemonDetail} />
            <Footer/>
        </div>
    )
}

export default Detail