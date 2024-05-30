"use client"

import useSWR from "swr";
import getPokemonDetail from "@/services/pokemonDetailService";
import {cn} from "@/lib/utils";
import RadarChart from "@/components/compare/stats/Chart";
import {PokemonStats} from "@/app/[id]/page";
import {pokemonStats} from "@/constants/pokemonStats";
import {ChartDatasetCustomTypesPerDataset} from "chart.js/auto";
import Body from "@/components/detail/body";
import PokemonTypeTag from "@/components/PokemonTypeTag";
import Footer from "@/components/compare/stats/Footer";
import {Separator} from "@/components/ui/separator";

const convertStats = (stats:PokemonStats):Array<number> => ([stats.hp, stats.attack, stats.defense, stats.special_attack, stats.special_defense, stats.speed])

const Stats = ({id, setId=()=>{}, className, ...props}: Readonly<{id: number, setId?: (id:number) => void, className?:string, [key:string]: any}>) => {
    const {data} = useSWR(`/compare/stats/${id}`, () => getPokemonDetail(id))

    // empty
    if (!data) return null

    const chartData:ChartDatasetCustomTypesPerDataset<"radar", Array<number|null>> = {
        type:"radar",
        label: 'Stats',
        data: convertStats(data.stats),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }

    return (
        <div className={cn("flex flex-col gap-4 items-center w-full h-full", className)} {...props}>
            <RadarChart data={chartData} labels={pokemonStats} className={"w-64 h-64"}/>
            <Body.InfoContainer>
                <Body.InfoHeader number={data.order} name={data.name} />
                <Separator orientation={"horizontal"}/>
                <Body.InfoContent>
                    <Body.InfoContentItem title={"Type"}>
                        {data.types.map((type) => <PokemonTypeTag key={type} name={type}/>)}
                    </Body.InfoContentItem>
                    <Body.InfoContentItem title={"Height"}>{`${data.height}"`}</Body.InfoContentItem>
                    <Body.InfoContentItem title={"Weight"}>{`${data.weight.toFixed(2)} Lb`}</Body.InfoContentItem>
                </Body.InfoContent>
            </Body.InfoContainer>
            <Footer id={id} setId={setId} />
        </div>
    )
}

export default Stats