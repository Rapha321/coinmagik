import React from "react";
import { Container } from 'semantic-ui-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip, 
  PieChart, Pie, Sector, Cell, ResponsiveContainer
} from "recharts";


export default function ChartIndividual(props) {

  const [priceData, setPriceData] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.cur}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
      .then(res => res.json())
      .then(info => info.map(x => { 
                                      if (isMounted && x.symbol === props.symbol) {
                                        setPriceData(prev => x.sparkline_in_7d.price)                        
                                      } 
                    }))

      return () => {isMounted = false};

  }, [props.symbol])


  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100
  //   }
  // ];
  

// to create a for loop and generate a structure same as above for chart to work

  const data1 = [];

  for (let i = 0; i < priceData.length; i++) {
    data1.push({nameX: "      Prix: 7 jours historique", prix: priceData[i]})
  }
  
  // const pieChartData = [
  //     { name: 'Group A', value: 400 },
  //     { name: 'Group B', value: 300 },
  //     { name: 'Group C', value: 300 },
  //     { name: 'Group D', value: 200 },
  //   ];
  
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  //   return (
  //     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  return (
      <div style = {{display: "flex", flexDirection: "row"}}>
        <div>
          <AreaChart
            width={300}
            height={100}
            data={data1}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nameX"/>
              <YAxis/>
              <Tooltip />
              <Area type="monotone" dataKey="prix" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </div>

        <div>
          {/* <PieChart width={140} height={140}>
              <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
              >
                  {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
              </Pie>
          </PieChart> */}
        </div>
        
    </div>
  );
}
