
import React from "react";
import TableHeader from "./TableHeader";
import ChartTopTen from './ChartTopTen';
import Specs from './Specs';

const Recherche = (props) => {

    return (
       <div className="details">
        <div >
            <table className="table table-striped">

                <thead>
                    <tr>
                        <TableHeader />
                    </tr>
                </thead>

                <tbody>
                    { Object.keys(props.data).map((x) => <Specs 
                                                        id={props.data[x].id} 
                                                        symbol={props.data[x].symbol}
                                                        img={props.data[x].image} 
                                                        prix={props.data[x].current_price} 
                                                        prixChange={props.data[x].price_change_percentage_24h}
                                                        volTotal={props.data[x].total_volume}
                                                        rangCap={props.data[x].market_cap_rank}
                                                        totalSupply={props.data[x].total_supply}
                                                        circulatingSupply={props.data[x].circulating_supply}
                                                        maxSupply={props.data[x].max_supply}
                                                        search={props.search} 
                                                        cur={props.cur}
                                                        data={props.data} /> ) }
                </tbody>

            </table>
        </div>
      </div>
    )
}


export default Recherche;