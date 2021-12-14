import React, { useState } from 'react';
import { Message, Select } from "semantic-ui-react";
import Recherche from './Recherche';
import TableHeader from './TableHeader';

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


    return (
        <div>
            <div class="ui block header">
                <h1>ꓘoinManiaK</h1>
            </div>

            <div className="header--second">
                <Select className="select-cur" options={currencies} value={currency} onChange={onCurrencyChange} placeholder="Currency"/>
                <div class="ui icon input" >
                    <input type="text" placeholder="Search..." /><i aria-hidden="true" class="search circular link icon"></i>
                </div>
                <div className="header-price">
                    <Message color='black' ></Message>
                </div>
            </div>
            <Recherche cur={currency}/>
            
        </div>
        
    )
}
 