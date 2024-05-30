"use client"

import React, { useEffect, useRef } from 'react';
import { Chart, ChartDatasetCustomTypesPerDataset } from 'chart.js/auto';
import {cn} from "@/lib/utils";

interface RadarChartProps {
    data: ChartDatasetCustomTypesPerDataset<"radar", Array<number|null>>,
    labels: Array<string>,
    className?: string,
    [key:string]: any
}

const RadarChart = ({ data, labels, className, ...props }: RadarChartProps) => {
    const chartRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!chartRef.current) return

        const ctx: CanvasRenderingContext2D|null = chartRef.current.getContext('2d')
        if (!ctx) return

        const myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels,
                datasets: [data],
            }
        })

        return () => myChart.destroy()
    }, [data, labels])

    return (
        <div className={cn("w-full h-full", className)} {...props}>
            <canvas ref={chartRef} width={150} height={150} />
        </div>
    )
};

export default RadarChart;
