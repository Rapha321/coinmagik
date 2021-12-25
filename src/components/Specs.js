import React, { useState } from "react"
import { Container } from "semantic-ui-react";
import ChartIndividual from "./ChartIndividual"

export default function Specs(props) {

    const [display, setDisplay] = useState("none");

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
            setDisplay(prev => "none");
        }
    }


    return (
        
        <Container >
            <tr style={{display: afficher()}} key={props.symbol} onClick={handleClick}>
                <td width="70px" > <img alt="logo" src={props.img} width="25px"/> </td>
                <td width="200px" > {props.id} </td>
                <td width="200px" > {props.prix} </td>
                <td width="200px" > {props.prixChange} </td>
                <td width="200px"> {props.volTotal} </td>
                <td width="150px"> <button class="ui mini teal button" >Ajouter</button> </td>
            </tr>
            <tr style={{display: display}} id="chart-div"> 
                <div className="infoAditionnel">
                    <div>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td > <ChartIndividual symbol={props.symbol} cur={props.cur}/> </td> 
                        <td></td>
                        <td></td>
                    </div>
                    
                    <div>
                        <br/>
                        <span>Symbol: {props.symbol} </span><br/>
                        <span>Rang de capitalisation: {props.rangCap}</span><br/>
                        <span>Approvisionnement total: {props.totalSupply}</span><br/>
                        <span>Approvisionnement maximum: {props.maxSupply}</span>
                    </div>
                </div>
                <br/>
            </tr>

        </Container>
    ) 

}


