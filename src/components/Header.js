import React, { useEffect, useRef, useState } from 'react';
import { Select, Message, Menu, Container } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import AllCoins from './AllCoins';
import PriceMessage from './PriceMessage';
import TopTen from './TopTen';
import Portfolio from './Portfolio';

export default function Header() {

    const searchRef = useRef();
    const [currency, setCurrency] = useState("USD");
    const [search, setSearch] = useState("");
    const [data, setData] = useState({});
    
    
    // Apel l'API quand l'application se lance et a chaque fois que currency change
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
            .then(res => res.json())
            .then(info => setData(info));

        // Mettre le focus sur le champ Search
        searchRef.current.focus();
        
    }, [currency])

    // Array de currency que l'utilisateur peux choisir
    const currencies = [
        { key: 'usd', value: 'usd', text: 'USD' },
        { key: 'cad', value: 'cad', text: 'CAD' },
        { key: 'jpy', value: 'jpy', text: 'JPY' },
        { key: 'gbp', value: 'gbp', text: 'GBP' },
        { key: 'eur', value: 'eur', text: 'EUR' },
        { key: 'aud', value: 'aud', text: 'AUD' }
      ]

    // Change le state de currency quand l'utilisateur choisi un nouveau currency
    const onCurrencyChange = (e, data1) => {
        setCurrency(data1.value)
    }

    // Mettre aa jour le state Search quand l'utilisateur saisie quelquechose dans le champ search
    const searchDisplay = (e) => {
        setSearch(e.target.value)
    }


    return (
        <Container>
            <BrowserRouter >
                <Message color="teal" class="ui block header">
               
                    {/* NAVBAR */}
                    <div className="browserRouter">
                        <h1 style={{color: "orange", textShadow: "0 0 1px black"}}>ꓘoinFolio</h1>

                        {/* CREER DES LIEN POUR NAVIGUER ENTRES DIFFERENTS PAGES */}
                        <div>
                            <header>
                                <Menu className='menu'>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/header/" exact={true}>Dashboard   </Menu.Item>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/TopTen">Top 10    </Menu.Item>
                                    <Menu.Item as={NavLink} activeStyle={{ fontWeight: "bold", color:"red"}} to="/Portfolio">Mon Portfolio     </Menu.Item>
                                </Menu>
                            </header>
                        </div>
                    
                        <div className="header--second">
                            {/* INPUT POUR CHOISIR UN CURRENCY */}
                            <Select className="select-cur" 
                                options={currencies} 
                                value={currency} 
                                onChange={onCurrencyChange} 
                                placeholder="Currency"/>
                            
                            {/* INPUT POUR FAIRE UN SEARCH */}
                            <div class="ui icon input" >
                                <input type="text" placeholder="Search..." ref={searchRef} name="search" value={search} onChange={searchDisplay}/>
                            </div>
                        </div>
                    </div>
               
                </Message>

                {/* AFFICHER LES PRIX DEROULANTE */}
                <div className="header-price">
                    <PriceMessage data={data}/>
                </div>

                {/* DEFINIR LES ROUTES POUR NAVIGUER ENTRES LES PAGES */}
                <Switch>
                    <Route path="/header/" exact={true}> <AllCoins cur={currency} data={data} search={search}/> </Route>
                    <Route path="/TopTen"> <TopTen cur={currency} data={data} search={search}/> </Route> 
                    <Route path="/Portfolio"> <Portfolio cur={currency} data={data}/> </Route>
                </Switch>
            </BrowserRouter>
            

        </Container>
        
    )
}
 