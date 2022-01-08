import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useHistory, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';

export default function Home() {

    let history = useHistory();

    const handleClick = () => {
        history.push('/header')

    }

    return (
            <div style={{textAlign: "center", marginTop: "10%", marginBottom: "5%"}}>
                <h1 style={{fontSize: "5em"}}>ꓘoinMagiK</h1>
                <h1 style={{fontSize: "3em", marginBottom: "5%"}}>Bienvenue</h1>
                <button className="ui positive button" 
                        style={{width: "15%", 
                                height: "50px", 
                                fontSize: "1.5em", 
                                paddingBottom: "25px"}} 
                        onClick={handleClick}>
                    Commencer!
                </button>
            </div>
    )
}