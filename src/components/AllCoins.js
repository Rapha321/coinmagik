import React from "react";
import TableHeader from "./TableHeader";
import TableBody from './TableBody';


// recu props de Header.js
const AllCoins = (props) => {

    return (
       <div className="details">
        <div >
            {/* TABLE QUI AFFICHE TOUS LES COINS */}
            <table className="table table-striped">

                {/* ENTETE DU TABLE */}
                <thead>
                    <tr>
                        <TableHeader />
                    </tr>
                </thead>

                {/* BODY DU TABLE */}
                <tbody>
                    { Object.keys(props.data).map((x) => <TableBody 
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

export default AllCoins;