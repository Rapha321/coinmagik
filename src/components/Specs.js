import React, { useState } from "react"
import ChartIndividual from "./ChartIndividual"

export default function Specs(props) {

    const [display, setDisplay] = useState("none");

    const afficher = () => {
        if (props.search === "" || props.id.includes(props.search)) {
            return "block";
        } else {
            return "none";
        }
    }


    const handleClick = () => {
        if (display === "none") {
            setDisplay(prev => "block");
        } else {
            setDisplay(prev => "none");
        }
    }


    return (
        
        <div >
            <tr style={{display: afficher()}} key={props.symbol} onClick={handleClick}>
                <td width="50px" > <img alt="logo" src={props.img} width="25px"/> </td>
                <td width="200px" > {props.id} </td>
                <td width="200px" > {props.prix} </td>
                <td width="200px" > {props.prixChange} </td>
            </tr>
            <tr style={{display: display}} id="chart-div"> 
                <td colspan="4"> <ChartIndividual symbol={props.symbol} cur={props.cur}/> </td> 
                <br/>
            </tr>

        </div>
    ) 

}


