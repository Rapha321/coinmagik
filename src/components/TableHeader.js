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
            <th width="200px">  Product</th>
            <th width="200px" align="right" style={styles}> Price</th>
            <th width="200px" align="right" style={styles}> Change in price</th>
            <th width="200px" align="right" style={styles}> Volume</th>
            <th width="150px"> Buy / Sell </th>
        </Container>
    )
}