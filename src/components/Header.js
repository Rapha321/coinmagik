import React from 'react';
import { Message, Select } from "semantic-ui-react";

export default function Header() {

    const currencies = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'cad', value: 'cad', text: 'CAD' },
        { key: 'jpy', value: 'jpy', text: 'JPY' },
        { key: 'gbp', value: 'gbp', text: 'GBP' },
        { key: 'eur', value: 'eur', text: 'EUR' },
        { key: 'aud', value: 'aud', text: 'AUD' }
      ]


    return (
        <div>
            <div class="ui block header">
                hello from header.js
            </div>

            <div className="header--second">
                <Select className="select-cur" options={currencies} placeholder="Afficher le prix en"/>
                <div class="ui icon input" >
                    <input type="text" placeholder="Search..."/><i aria-hidden="true" class="search circular link icon"></i>
                </div>
                <div className="header-price">
                    <Message color='black' ></Message>
                </div>
            </div>

        </div>
        
    )
}
 