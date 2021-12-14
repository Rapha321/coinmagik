import React from "react"
import { Table, TableBody } from "semantic-ui-react";
import Chart from "./Chart"
import TableHeader from './TableHeader';

export default function Specs(props) {

    const afficher = () => {
        if (props.search == "" || props.id.includes(props.search)) {
            return "block";
        } else {
            return "none";
        }
    }

    return (

        <div>
            
            <tr style={{display: afficher()}}>
                <td width="50px" > <img src={props.img} width="25px"/> </td>
                <td width="200px" > {props.id} </td>
                <td width="200px" > {props.prix} </td>
                <td width="200px" > {props.prixChange} </td>
            </tr>

            <div className="chart-div">
                <Chart />
            </div>
        </div>
    ) 

}


