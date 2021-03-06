import React, {useEffect} from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,Tooltip, 
} from "recharts";


// recu props de TableBody.js
export default function ChartIndividual(props) {

  const [priceData, setPriceData] = React.useState([]);

  // setPriceData quand l'application lance et a chaque fois que l'utilisateur choisi un autre devise
  useEffect(() => {
    let isMounted = true;
    props.data.map(x => { 
                          if (isMounted && x.symbol === props.symbol) {
                            setPriceData(x.sparkline_in_7d.price)                        
                          } 
                  })
    return () => {isMounted = false};
  }, [props.cur])


  // Definir un array pour qui vas contenir les donnees pour le diagramme
  const data1 = [];

  
  // Remplir l'array avec les prix historiques pour chaque coin
  for (let data of priceData) {
    data1.push({nameX: "      Prix: 7 jours historique", prix: data})
  }

  return (
      <div style = {{display: "flex", flexDirection: "row", marginTop: "15px"}}>
        <div>
          {/* RETOURNE AN DIAGRAMME QUI PREND L'ARRAY, DEFINIR EN HAUT, COMME DONNEES */}
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
