import React from "react";
import { Container } from "semantic-ui-react";

export default function TableHeader(props) {

    return (
        <Container>
            <br/>
            <th width="70px"> </th>
            <th width="200px">  Produit</th>
            <th width="200px"> Prix</th>
            <th width="200px"> Changement Prix</th>
            <th width="200px"> Volume total</th>
            <th width="150px"> Mon Portfolio </th>
        </Container>
    )
}