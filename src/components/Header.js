import React, { useState } from 'react';
import { Select } from "semantic-ui-react";
import Recherche from './Recherche';
import PriceMessage from './PriceMessage';

export default function Header() {

    const [currency, setCurrency] = useState("USD");
    const [search, setSearch] = useState("");

    const currencies = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'cad', value: 'cad', text: 'CAD' },
        { key: 'jpy', value: 'jpy', text: 'JPY' },
        { key: 'gbp', value: 'gbp', text: 'GBP' },
        { key: 'eur', value: 'eur', text: 'EUR' },
        { key: 'aud', value: 'aud', text: 'AUD' }
      ]


    const onCurrencyChange = (e, data) => {
        setCurrency(prev => data.value);
    }

    const searchDisplay = (e, data) => {
        setSearch(prev => e.target.value)
    }


    return (
        <div>
            <div class="ui block header">
                <h1>ꓘoinMagiK</h1>
            </div>

            <div className="header-price">
                    <PriceMessage cur={currency}/>
             </div>

            <div className="header--second">
                <Select className="select-cur" 
                        options={currencies} 
                        value={currency} 
                        onChange={onCurrencyChange} 
                        placeholder="Currency"/>

                <div class="ui icon input" >
                    <input type="text" placeholder="Search..." name="search" value={search} onChange={searchDisplay}/>
                </div>

            </div>

            <Recherche cur={currency} search={search}/>
        </div>
        
    )
}
 