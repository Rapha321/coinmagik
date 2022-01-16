import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Container } from "semantic-ui-react";


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#bdb76b", "#add8e6"];

  const customLabel = (data) => {
    return (
      `${data.name}: ${data.value.toFixed(0)}%`
    )
  }

  export default function PortfolioChart(props) {

    return (
        <PieChart width={320} height={230}>
          <Pie
            data={props.pieData}
            cx={160}
            cy={110}
            isAnimationActive={true}
            labelLine={true}
            label={customLabel}
            outerRadius={80}
            fill="#8884d8"
          >
            {props.pieData.map((entry, index) => 
              (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              )
            )}
          </Pie>
        </PieChart>
    )
}

 

