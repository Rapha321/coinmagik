import React from "react";


export default function PriceMessage(props) {

    const [data, setData] = React.useState({});


    React.useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.cur}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then(res => res.json())
        .then(info => setData(prev => info) )
    }, [props.cur])

    
    return (
        <div className="flow-price-wrapper">
            <div  id="flow-price" class="alert alert-dark" role="alert"> 
                { 
                    Object.keys(data).map(x => <span key={data[x].symbol}>
                                                    <strong>  {data[x].symbol.toUpperCase()} </strong> : 
                                                    <strong>  Prix  </strong> {data[x].current_price} 
                                                    <strong>  High  </strong> {data[x].high_24h} 
                                                    <strong>  Low  </strong> {data[x].low_24h} -----
                                                </span>
                                        )
                }
            </div>
        </div>

    )

}

