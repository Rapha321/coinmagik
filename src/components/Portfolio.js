import React, { useContext, useState, useEffect } from "react"
import axios from 'axios';
import {PortfolioContext}  from "./PortfolioContext"
import { Container, Statistic, Button } from 'semantic-ui-react'
import PortfolioChart from '../components/PortfolioChart'


// recu props de Header.js
export default function Portfolio(props) {

    const [portfolio, setPortfolio] = useContext(PortfolioContext)
    const [actuel, setActuel] = useState(0);
    const [initial, setInitial] = useState(0);
    const [result, setResult] = useState([]);
    const [refresh, setRefresh] = useState(true);
    let pieData = []
    let actualInvest = 0;


    // Calcul le total du Investissement initial et actuel a chaque fois que portfolio.js est appeler
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then((res) => setResult(res.data) )
        .catch((erreur) =>console.log(erreur))
    }, [])


    // Definir les donner pour afficher le pieChart et calculer le montant actuel d'investisement (actualInvest)
    portfolio.map(pfolio => {
        result.map(x => {
            if (pfolio.coin === x.symbol) {
                actualInvest += (100000 / pfolio.prixAchat) * x.current_price 
                pieData = [...pieData, {
                                            "name": pfolio.coin,
                                            "value": (100000 / pfolio.prixAchat) * x.current_price /actuel * 100
                                        }]
            }
        })
    })

    // Set le montant initial et actuel
    useEffect(() => {
        setInitial(portfolio.length * 100000);
        setActuel(actualInvest)
    }, [])

    
    // Apel l'api a chaque fois qu'on click sur le bouton refresh
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then((res) => {    
                            setResult(res.data); 
                            actualInvest = 0;
                            portfolio.map(pfolio => {
                                res.data.map(x => {
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
                            setActuel(actualInvest)
                        })
        .catch((erreur) =>console.log(erreur));

    }, [refresh])

    // A chaque fois qu'on click  sur le bouton refresh, set refresh a false ou true
    const onRefresh = () => {
        setRefresh(!refresh)
    }

    // Definir le styles pour chaque cell du table
    let styles = {
        paddingLeft: '60px'
    }


    // Fonction pour mettre des virgules dans des chiffres
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
                // SI LE PORTFOLIO EST VIDE, AFFICHE UN MESSAGE SINON AFFICHE LE PORTFOLIO
                portfolio.length === 0 ? <h1>Votre portfolio est vide!</h1> :

                <div>
                    <div style={{display: "flex", marginBottom: "20px"}}>

                        {/* AFFICHE LE PIECHART */}
                        <div style={{marginLeft: "2%"}}>
                            <PortfolioChart pieData={pieData} />
                        </div>

                        {/* AFFICHE LE TOTAL DE L'INVESTISSEMENT INITIAL, ACTUEL ET GAIN/PERTE */}
                        <div style={{marginLeft: "auto", marginTop: "20px", marginBottom: "auto", marginRight: "auto"}}>
                            <div style={{display: "flex"}}>    
                                <h3>Portfolio Crypto Equilibré - USD</h3>
                                <Button inverted size='mini' color='blue' onClick={onRefresh} 
                                        style={{marginLeft: "auto", marginTop: "2%"}}>
                                    Refresh
                                </Button>
                            </div>
                            <br/>
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
                        {/* AFFICHE LES COINS QUE LE USER A ACHETER */}
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
                                        result.map(data => {
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