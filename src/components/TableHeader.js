import React from "react";
import { Table, TableBody } from "semantic-ui-react";

export default function TableHeader(props) {

    return (
        <div>
            <br/>
            <th width="50px"> </th>
            <th width="200px">  Produit</th>
            <th width="200px"> Prix</th>
            <th width="200px"> Changement Prix</th>
        </div>
    )
}