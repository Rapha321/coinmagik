import React, { useState, useContext } from "react"
import { Button, Container } from "semantic-ui-react"
import ChartIndividual from "./ChartIndividual"
import {PortfolioContext}  from "./PortfolioContext"

export default function TableBody(props) {

    const [display, setDisplay] = useState("none")
    const [portfolio, setPortfolio] = useContext(PortfolioContext)


    const afficher = () => {
        if (props.search === "" || props.id.includes(props.search)) {
            return "inline-block";
        } else {
            return "none";
        }
    }


    const handleClick = () => {
        if (display === "none") {
            setDisplay(prev => "inline-block");
        } else {
            setDisplay(prev => "none")
        }
    }

    const addCommas = (nStr) => {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }


    let styles = {
        paddingRight: '60px'
    }


    return (
        <Container>
            <tr style={{display: afficher()}} key={props.symbol} onClick={handleClick}>
                <td width="70px" > <img alt="logo" src={props.img} width="25px"/> </td>
                <td width="200px" > {props.id} </td>
                <td width="200px" align="right" style={styles}> {addCommas(props.prix.toFixed(4))} </td>
                <td width="200px" align="right" style={styles}> {props.prixChange.toFixed(5)} </td>
                <td width="200px" align="right" style={styles}> {addCommas(props.volTotal)} </td>
                <td width="150px"> 
                    <Button class="ui mini teal button" 
                            onClick={() => {setPortfolio( prev => [...prev, props.symbol] ); setDisplay("none")}}>
                            Ajouter
                    </Button>
                </td>
            </tr>
            <tr style={{display: display}} id="chart-div"> 
                <div className="infoAditionnel">
                    <div>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td > <ChartIndividual symbol={props.symbol} cur={props.cur} data={props.data}/> </td> 
                        <td></td>
                        <td></td>
                    </div>
                    
                    <div>
                        <br/>
                        <span>Symbol: {props.symbol} </span><br/>
                        <span>Rang de capitalisation: {props.rangCap}</span><br/>
                        <span>Approvisionnement total: {addCommas(props.totalSupply)}</span><br/>
                        <span>Approvisionnement maximum: {addCommas(props.maxSupply)}</span>
                    </div>
                </div>
                <br/>
            </tr>
        </Container>
    ) 

}


