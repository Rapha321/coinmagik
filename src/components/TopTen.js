import React from "react";
import { Container } from "semantic-ui-react";
import TopTenResult from "./TopTenResult";


// recu props de Header.js
export default function TopTen(props) {

  // Definir la structure de donnees pour les top 10 coins
  let topTen = [ 
                { rank1: 1, n1:"", url1:"", p1:0 }, 
                { rank2: 1, n2:"", url2:"", p2:0 }, 
                { rank3: 1, n3:"", url3:"", p3:0 }, 
                { rank4: 1, n4:"", url4:"", p4:0 },
                { rank5: 1, n5:"", url5:"", p5:0 }, 
                { rank6: 1, n6:"", url6:"", p6:0 },
                { rank7: 1, n7:"", url7:"", p7:0 },
                { rank8: 1, n8:"", url8:"", p8:0 },
                { rank9: 1, n9:"", url9:"", p9:0 },
                { rank10: 1, n10:"", url10:"", p10:0 }
          ]

          
  // Remplir la structure de donnees pour les top 10 coins en prenant en consideration le
  // classement par 'Rang de capitalisation'
  props.data.map(x => {
                        for (let i = 0; i < 10; i++) {
                            if (x.market_cap_rank === i+1) {
                              topTen[i][`rank${i+1}`]= x.market_cap_rank
                              topTen[i][`n${i+1}`]= x.name
                              topTen[i][`url${i+1}`]= x.image
                              topTen[i][`p${i+1}`]=x.sparkline_in_7d.price
                            }
                        }
                  })


  let prix = {};
  let topTenData = [];
  let n = 1;

  // Remplir le tableau topTenData avec les prix historique pour representer dans un diagramme.
  for (let i = 1; i < 160; i+=5) {

    for (let item of topTen) {
      prix[`p${n}`] = item[`p${n}`][i]
      if (n === 10) {
        n = 1;
      } else {
        n++;
      }
    }
    topTenData.push(prix)
    prix = {}

  }

  return (

    <Container fluid>
      <br/>
      {topTen.map((topten, i) => <TopTenResult topten={topten} i={i} topTenData={topTenData} coins={props.data}/>)}
    </Container>

  )
}
