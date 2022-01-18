import React from "react";
import { PieChart, Pie, Cell } from "recharts";


  // Definir les couleurs du piechart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#bdb76b", "#add8e6"];

  // Definir le label du pieChart
  const customLabel = (data) => {
    return (
      `${data.name}: ${data.value.toFixed(0)}%`
    )
  }

  export default function PortfolioChart(props) {

    return (
        //AFFICHER LE PIECHART AVEC LES DONNEES RECU COMME PROPS DU PORTFOLIO.JS
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

 

