import React, { useContext } from "react"
import { Container } from "semantic-ui-react"
import {PortfolioContext}  from "./PortfolioContext"

export default function Portfolio(props) {

    const [portfolio, setPortfolio] = useContext(PortfolioContext)

    
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

                <table className="table table-striped">
                    <thead>
                        <th width="70px"> </th>
                        <th width="200px">  Produit</th>
                        <th width="200px" align="right" style={styles}> Prix actuel</th>
                        <th width="200px" align="right" style={styles}> Changement Prix</th>
                        <th width="200px" align="right" style={styles}> Volume total</th>
                        <th width="150px"> Mon Portfolio </th>
                    </thead>
                    {
                        portfolio.map(coin => {
                            return (
                                props.data.map(data => {
                                    if (coin === data.symbol) {
                                        return (
                            
                                            <tbody>
                                                <tr key={data.symbol} >
                                                    <td width="70px" > <img alt="logo" src={data.image} width="25px"/> </td>
                                                    <td width="200px" > {data.id} </td>
                                                    <td width="200px" align="right" style={styles}> {addCommas(data.current_price)} </td>
                                                    <td width="200px" align="right" style={styles}> {data.price_change_24h} </td>
                                                    <td width="200px" align="right" style={styles}> {addCommas(data.total_supply)} </td>
                                                    <td width="150px"> </td>
                                                </tr>
                                            </tbody>
                                        
                                        )
                                    }
                                })
                            )
                        })
                    }
                </table>
            }

        </Container>

    )
}