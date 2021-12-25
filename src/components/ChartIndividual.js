import React from "react";
import { Container } from 'semantic-ui-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip, 
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

  }, [props.cur])


  const data1 = [];

  for (let data of priceData) {
    data1.push({nameX: "      Prix: 7 jours historique", prix: data})
  }

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
       
    </div>
  );
}
