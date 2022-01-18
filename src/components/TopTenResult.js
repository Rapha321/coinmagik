import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import { Card, Image } from "semantic-ui-react";


// recu props de TopTen.js.js
export default function TopTenResult(props) {

    // FONCTION POUR AJOUTER DES VIRGULE DANS LES CHIFFRES
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
        <div>

            {/* AFFICHER UN DIAGRAMME LINECHART ET UNE CARD POUR CHAQUE COIN */}
            <div className="topTen-section">

                {/* DIAGRAMME LINECHART */}
                <div>
                    <br/><br/>
                    <LineChart width={700} height={200} data={props.topTenData}>
                    <br/>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey={`n${props.i + 1}`} padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Line type="linear" dataKey={`p${props.i + 1}`} stroke="#8884d8" />
                    </LineChart>
                </div>

                {/* CARD */}
                <Card style={{width: "320px"}}>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={props.topten[`url${props.i + 1}`]}
                    />
                    <Card.Header>{props.topten[`n${props.i + 1}`]}</Card.Header>
                    <Card.Meta>Rang de cap. boursière: <strong>{props.topten[`rank${props.i + 1}`]}</strong> </Card.Meta>
                    <Card.Description>
                        {
                            // eslint-disable-next-line
                            props.coins.map(coin => {
                                if (coin.market_cap_rank === props.topten[`rank${props.i + 1}`]) {
                                    return (
                                        <table className="cardDescr-topTen">
                                            <tr>
                                                <td>Prix actuel: </td>
                                                <td><strong>{addCommas(coin.current_price.toFixed(5))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Cap. boursière: </td>
                                                <td><strong>{addCommas(coin.market_cap.toFixed(0))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingRight: "15px"}}>Approv. en circulation: </td>
                                                <td><strong>{addCommas(coin.circulating_supply.toFixed(0))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Haut du jour: </td>
                                                <td><strong>{addCommas(coin.high_24h.toFixed(4))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Bas du jour: </td>
                                                <td><strong>{addCommas(coin.low_24h.toFixed(4))}</strong></td>
                                            </tr>
                                        </table>
                                    )
                                }
                            })
                        }
                    </Card.Description>
                    </Card.Content>
                </Card>
            </div>

            <hr/>

        </div>
    )

}