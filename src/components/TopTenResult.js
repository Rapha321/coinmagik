import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import { Card, CardHeader, Image } from "semantic-ui-react";


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

                {/* DIAGRAMME AREACHART */}
                <div>
                    <br/><br/>
                    <AreaChart
                        width={700}
                        height={200}
                        data={props.topTenData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={`n${props.i + 1}`} padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Area type="linear" dataKey={`p${props.i + 1}`} stroke="#82ca9d" fill="#87ceeb" />
                    </AreaChart>
                </div>

                {/* CARD */}
                <Card style={{width: "320px"}}>
                    <Card.Content >
                        <CardHeader style={{backgroundColor: "aquamarine", padding: "5px", borderRadius: "5px"}}>
                        <Image
                            floated='right'
                            size='mini'
                            src={props.topten[`url${props.i + 1}`]}
                        />
                        <Card.Header>{props.topten[`n${props.i + 1}`]}</Card.Header>
                        <Card.Meta>Stock market cap ranking: <strong>{props.topten[`rank${props.i + 1}`]}</strong> </Card.Meta>
                    </CardHeader>
                    <Card.Description>
                        {
                            props.coins.map(coin => {
                                if (coin.market_cap_rank === props.topten[`rank${props.i + 1}`]) {
                                    return (
                                        <table className="cardDescr-topTen">
                                            <tr>
                                                <td>Price: </td>
                                                <td><strong>{addCommas(coin.current_price.toFixed(5))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Market cap: </td>
                                                <td><strong>{addCommas(coin.market_cap.toFixed(0))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td style={{paddingRight: "15px"}}>Approv. in circulation: </td>
                                                <td><strong>{addCommas(coin.circulating_supply.toFixed(0))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>High of the day: </td>
                                                <td><strong>{addCommas(coin.high_24h.toFixed(4))}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Low of the day: </td>
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