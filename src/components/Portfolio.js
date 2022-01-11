import React, { useContext, useState } from "react"
import { Container } from "semantic-ui-react"
import {PortfolioContext}  from "./PortfolioContext"
import { Segment, Statistic } from 'semantic-ui-react'
import PortfolioChart from '../components/PortfolioChart'

export default function Portfolio(props) {

    const [portfolio, setPortfolio] = useContext(PortfolioContext)
    // const [investissementActuel, setInvestissementActuel] = useState(0)
    // const [gainPerte, setGainPerte] = useState(0)

    
    let styles = {
        paddingLeft: '60px'
    }

    const addCommas = (nStr) => {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    // const invest = (prixAchat, prixActuel) => {
    //     setInvestissementActuel(investissementActuel + (100000/prixAchat * prixActuel))
    // }

    // const gainPerteCalcul  = () => {
    //     setGainPerte(gainPerte + (investissementActuel - 100000) )
    // }

    return (
        
        <Container>
            <br/>

            {
                portfolio.length === 0 ? <h1>Votre portfolio est vide!</h1> :

                <div>
                    <div style={{display: "flex", marginBottom: "20px"}}>
                        <div style={{margin: "0"}}>
                            <PortfolioChart />
                        </div>
                        <div style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", marginRight: "15px"}}>
                            <Statistic.Group  >
                                <Statistic color="blue">
                                    <Statistic.Value>{portfolio.length * 100000}</Statistic.Value>
                                    <Statistic.Label>initial</Statistic.Label>
                                </Statistic>
                                <Statistic color="green">
                                    <Statistic.Value>32,000</Statistic.Value>
                                    <Statistic.Label>actuel</Statistic.Label>
                                </Statistic>
                                <Statistic color="purple">
                                    <Statistic.Value>22</Statistic.Value>
                                    <Statistic.Label>gain/(perte)</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>    
                    </div>

                    

                    <div>
                        <table className="table table-striped">
                            <thead>
                                <th width="70px"> </th>
                                <th width="200px">  Produit</th>
                                <th width="200px" align="right" style={styles}> Quantité </th>
                                <th width="200px" align="right" style={styles}> Prix d'achat </th>
                                <th width="200px" align="right" style={styles}> Prix actuel</th>
                                <th width="150px"> Gain / Perte </th>
                            </thead>
                            {
                                portfolio.map(pfolio => {
                                    return (
                                        props.data.map(data => {
                                            if (pfolio.coin === data.symbol) {
                                                // invest(pfolio.prixAchat, data.current_price)
                                                // gainPerteCalcul()
                                                return (
                                                    <tbody>
                                                        <tr key={data.symbol} >
                                                            <td width="70px" > <img alt="logo" src={data.image} width="25px"/> </td>
                                                            <td width="200px" > {data.id} </td>
                                                            <td width="200px" align="right" style={styles}> {100000 / pfolio.prixAchat} </td>
                                                            <td width="200px" align="right" style={styles}> {pfolio.prixAchat} </td>
                                                            <td width="200px" align="right" style={styles}> {data.current_price} </td>
                                                            <td width="150px">  {(100000 / pfolio.prixAchat) * (data.current_price - pfolio.prixAchat)} </td>
                                                        </tr>
                                                    </tbody>
                                                
                                                )
                                            }
                                        })
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            }

        </Container>

    )
}