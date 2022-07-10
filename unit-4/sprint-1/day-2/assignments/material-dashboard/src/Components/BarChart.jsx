import { Paper } from '@material-ui/core';
import React from 'react';
import { Chart, BarSeries, ArgumentAxis, ValueAxis, Tooltip } from "@devexpress/dx-react-chart-material-ui";
import { EventTracker } from "@devexpress/dx-react-chart";

const data = [
    {
        day: "Mon",
        sale: 520
    },
    {
        day: "Tue",
        sale: 220
    },
    {
        day: "Wed",
        sale: 130
    },
    {
        day: "Thu",
        sale: 370
    },
    {
        day: "Fri",
        sale: 190
    },
    {
        day: "Sat",
        sale: 410
    },
    {
        day: "Sun",
        sale: 280
    }
]

export const BarChart = () => {
    return (
        <Paper>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />
                <BarSeries valueField="sale" argumentField="day" />
                <EventTracker />
                <Tooltip />
            </Chart>
        </Paper>
    )
}
