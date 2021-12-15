
import React from "react";
import TableHeader from "./TableHeader";
import Chart from './Chart';
import Specs from './Specs';

const Recherche = (props) => {

    const [data, setData] = React.useState({
        id: "",
        symbol: "",
        img: "",
        prix: 0,
        prixChange: 0
    });


    React.useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.cur}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then(res => res.json())
        .then(info => setData(prev => info))
    }, [props.cur])


    return (
       <div className="details">
        <div >
        <table class="table table-striped">

            <thead>
                <tr>
                    <TableHeader />
                </tr>
            </thead>

            <tbody>
                { Object.keys(data).map((x) => <Specs id={data[x].id} 
                                                img={data[x].image} 
                                                prix={data[x].current_price} 
                                                prixChange={data[x].price_change_24h}
                                                search={props.search} /> ) }
            </tbody>

        </table>

        </div>
        <div className="charts">
          <br/><br/><br/><br/>
          <Chart />
        </div>
      </div>
    )
}


export default Recherche;