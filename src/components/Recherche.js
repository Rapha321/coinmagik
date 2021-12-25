
import React from "react";
import TableHeader from "./TableHeader";
import ChartTopTen from './ChartTopTen';
import Specs from './Specs';

const Recherche = (props) => {

    const [data, setData] = React.useState({});


    React.useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.cur}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then(res => res.json())
        .then(info => setData(prev => info))
    }, [props.cur])


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
                    { Object.keys(data).map((x) => <Specs 
                                                        id={data[x].id} 
                                                        symbol={data[x].symbol}
                                                        img={data[x].image} 
                                                        prix={data[x].current_price} 
                                                        prixChange={data[x].price_change_percentage_24h}
                                                        volTotal={data[x].total_volume}
                                                        rangCap={data[x].market_cap_rank}
                                                        totalSupply={data[x].total_supply}
                                                        maxSupply={data[x].max_supply}
                                                        search={props.search} 
                                                        cur={props.cur}/> ) }
                </tbody>

            </table>
        </div>
      </div>
    )
}


export default Recherche;