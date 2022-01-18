import React from "react";
import { Container } from "semantic-ui-react";

export default function TableHeader(props) {

    let styles = {
        paddingLeft: '60px'
    }

    return (
        // ENTETE DU TABLE
        <Container>
            <br/>
            <th width="70px"> </th>
            <th width="200px">  Produit</th>
            <th width="200px" align="right" style={styles}> Prix actuel</th>
            <th width="200px" align="right" style={styles}> Changement Prix</th>
            <th width="200px" align="right" style={styles}> Volume total</th>
            <th width="150px"> Mon Portfolio </th>
        </Container>
    )
}