import { Paper } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie } from "recharts";

export const PieChartComp = ({ psc }) => {
    
    return (
        <Paper>
            <PieChart width={400} height={400} >
                <Pie data={psc} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
            </PieChart>
        </Paper>
    )
}
