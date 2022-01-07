import React, { useEffect, useRef, useState } from 'react';
import { Select, Message, Menu, Container } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Recherche from './Recherche';
import PriceMessage from './PriceMessage';
import ChartTopTen from './ChartTopTen';
import Portfolio from './Portfolio';

export default function Header() {

    const [currency, setCurrency] = useState("USD");
    const [search, setSearch] = useState("");
    const searchRef = useRef();
    const [data, setData] = React.useState({});


    React.useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
        .then(res => res.json())
        .then(info => setData(info))

        searchRef.current.focus()
    }, [currency])


    const currencies = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'cad', value: 'cad', text: 'CAD' },
        { key: 'jpy', value: 'jpy', text: 'JPY' },
        { key: 'gbp', value: 'gbp', text: 'GBP' },
        { key: 'eur', value: 'eur', text: 'EUR' },
        { key: 'aud', value: 'aud', text: 'AUD' }
      ]


    const onCurrencyChange = (e, data1) => {
        setCurrency(prev => data1.value)
    }

    const searchDisplay = (e) => {
        setSearch(prev => e.target.value)
    }


    return (
        <Container>
            <BrowserRouter >
                <Message color="teal" class="ui block header">
               
                    <div className="browserRouter">
                        <h1>ꓘoinMagiK</h1>

                        <div>
                            <header>
                                <Menu className='menu'>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/" exact={true}>Dashboard   </Menu.Item>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/ChartTopTen">Top 10    </Menu.Item>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/Portfolio">Mon Portfolio     </Menu.Item>
                                </Menu>
                            </header>
                        </div>
                    
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
                    </div>
               
                </Message>

                <div className="header-price">
                    <PriceMessage cur={currency}/>
                </div>
                <Switch>
                    <Route path="/" exact={true}> <Recherche cur={currency} data={data} search={search}/> </Route>
                    <Route path="/ChartTopTen"> <ChartTopTen cur={currency} data={data} search={search}/> </Route> 
                    <Route path="/Portfolio"> <Portfolio cur={currency} data={data} /> </Route>
                </Switch>
            </BrowserRouter>

        </Container>
        
    )
}
 