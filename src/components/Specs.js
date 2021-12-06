import React from "react"
import Chart from "./Chart"

export default function Specs(props) {

    return (

        <div>
            <table>

                <tr>
                    <td width="50px"> <img src={props.img} width="30px"/> </td>
                    <td width="200px"> {props.id} </td>
                    <td width="200px"> {props.prix} </td>
                    <td width="200px"> {props.prixChange} </td>
                </tr>
            </table>
            <div className="chart-div">
                <Chart />
            </div>
        </div>
    ) 

}