import React, { useEffect, useRef, useState } from 'react';
import { Select, Message, Menu } from "semantic-ui-react";
// import { NavLink } from 'react-router-dom';
import Recherche from './Recherche';
import PriceMessage from './PriceMessage';

export default function Header() {

    const [currency, setCurrency] = useState("USD");
    const [search, setSearch] = useState("");
    const searchRef = useRef();


    const currencies = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'cad', value: 'cad', text: 'CAD' },
        { key: 'jpy', value: 'jpy', text: 'JPY' },
        { key: 'gbp', value: 'gbp', text: 'GBP' },
        { key: 'eur', value: 'eur', text: 'EUR' },
        { key: 'aud', value: 'aud', text: 'AUD' }
      ]


    const onCurrencyChange = (e, data) => {
        setCurrency(prev => data.value)
    }

    const searchDisplay = (e, data) => {
        setSearch(prev => e.target.value)
    }

    useEffect(() => {
        searchRef.current.focus()
    })


    return (
        <div>
            <Message color="teal" class="ui block header">
                <h1>ꓘoinMagiK</h1>
                {/* <Menu>
                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} >Dashboard</Menu.Item>
                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}}  >Top 10 </Menu.Item>
                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}}  >Mon Portfolio</Menu.Item>
                </Menu> */}
            </Message>

            <div className="header-price">
                    <PriceMessage cur={currency}/>
            </div>
            <br/>
            <div className="header--second">
                <Select className="select-cur" 
                        options={currencies} 
                        value={currency} 
                        onChange={onCurrencyChange} 
                        placeholder="Currency"/>

                <div class="ui icon input" >
                    <input type="text" placeholder="Search..." ref={searchRef} name="search" value={search} onChange={searchDisplay}/>
                </div>

            </div>

            <Recherche cur={currency} search={search}/>
        </div>
        
    )
}
 