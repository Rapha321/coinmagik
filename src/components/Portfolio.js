import React, { useContext, useState, useEffect } from "react"
import {PortfolioContext}  from "./PortfolioContext"
import { Container, Segment, Statistic } from 'semantic-ui-react'
import PortfolioChart from '../components/PortfolioChart'

export default function Portfolio(props) {

    const [portfolio, setPortfolio] = useContext(PortfolioContext)
    const [actuel, setActuel] = useState(0);
    const [initial, setInitial] = useState(0);
    let pieData = []
    let actualInvest = 0;

    portfolio.map(pfolio => {
        props.data.map(x => {
            if (pfolio.coin === x.symbol) {
                actualInvest += (100000 / pfolio.prixAchat) * x.current_price 
                pieData = [...pieData, {
                                          "name": pfolio.coin,
                                          "value": (100000 / pfolio.prixAchat) * x.current_price /actuel * 100
                                        }
                           ]
            }
        })
    })

    console.log("name: ", pieData)

    useEffect(() => {
       setInitial(portfolio.length * 100000)
       setActuel(actualInvest)
    }, [])


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


    return (
        <Container>
            <br/>

            {
                portfolio.length === 0 ? <h1>Votre portfolio est vide!</h1> :

                <div>
                    <div style={{display: "flex", marginBottom: "20px"}}>
                        <div style={{marginLeft: "5%"}}>
                            <PortfolioChart pieData={pieData} />
                        </div>
                        <div style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto", marginRight: "5%"}}>
                            <Statistic.Group  >
                                <Statistic color="blue">
                                    <Statistic.Value>{addCommas(initial.toFixed(0))}</Statistic.Value>
                                    <Statistic.Label>initial</Statistic.Label>
                                </Statistic>
                                <Statistic color="green">
                                    <Statistic.Value>{addCommas(actuel.toFixed(0))}</Statistic.Value>
                                    <Statistic.Label>actuel</Statistic.Label>
                                </Statistic>
                                <Statistic color="purple" size="large">
                                    <Statistic.Value>{addCommas((actuel - initial).toFixed(0))}</Statistic.Value>
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
                                <th width="200px" align="right" style={styles}> Montant investi </th>
                                <th width="200px" align="right" style={styles}> Quantité </th>
                                <th width="150px" align="right" style={styles}> Prix d'achat </th>
                                <th width="150px" align="right" style={styles}> Prix actuel</th>
                                <th width="200px" align="right" style={styles}> Montant actuel </th>
                                <th width="200px" align="right" style={styles}> Gain / Perte </th>
                            </thead>
                            {
                                portfolio.map(pfolio => {
                                    return (
                                        props.data.map(data => {
                                            if (pfolio.coin === data.symbol) {
                                                return (
                                                    <tbody>
                                                        <tr key={data.symbol} >
                                                            <td width="70px" > <img alt="logo" src={data.image} width="25px"/> </td>
                                                            <td width="200px" > {data.id} </td>
                                                            <td width="200px" align="right"> {addCommas(100000)} </td>
                                                            <td width="200px" align="right" style={styles}> {addCommas((100000 / pfolio.prixAchat).toFixed(5))} </td>
                                                            <td width="150px" align="right" style={styles}> {addCommas(pfolio.prixAchat.toFixed(4))} </td>
                                                            <td width="150px" align="right" style={styles}> {addCommas(data.current_price.toFixed(4))} </td>
                                                            <td width="200px" align="right" style={styles}> {addCommas(((100000 / pfolio.prixAchat) * data.current_price).toFixed(0))} </td>
                                                            <td width="200px" align="right" style={styles}>  {addCommas(((100000 / pfolio.prixAchat) * (data.current_price - pfolio.prixAchat)).toFixed(0))} </td>
                                                            
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