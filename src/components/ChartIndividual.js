import React from "react";
import { Container } from 'semantic-ui-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip, 
} from "recharts";


export default function ChartIndividual(props) {

  const [priceData, setPriceData] = React.useState([]);

  React.useEffect(() => {
    let isMounted = true;
    props.data.map(x => { 
                          if (isMounted && x.symbol === props.symbol) {
                            setPriceData(prev => x.sparkline_in_7d.price)                        
                          } 
                  })

    return () => {isMounted = false};

  }, [props.cur])


  const data1 = [];

  for (let data of priceData) {
    data1.push({nameX: "      Prix: 7 jours historique", prix: data})
  }

  return (
      <div style = {{display: "flex", flexDirection: "row", marginTop: "15px"}}>
        <div>
          <AreaChart
            width={300}
            height={130}
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
