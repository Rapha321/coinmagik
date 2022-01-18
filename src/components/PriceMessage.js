import React from "react";
import { Message } from "semantic-ui-react";


// recu props de Header.js
export default function PriceMessage(props) {

    return (
        <div className="flow-price-wrapper">
            <Message color="black" id="flow-price" > 
                { 
                    // AFFICHER LES PRIX HIGH ET LOW DANS UN MESSAGE DEROULANTE
                    Object.keys(props.data).map(x => <span key={props.data[x].symbol} style={{color:"#00ff00"}}>
                                                    <strong style={{color:"#FFFFFF"}}>  {props.data[x].symbol.toUpperCase()} </strong> : 
                                                    <strong>  Prix  </strong> {props.data[x].current_price} 
                                                    <strong>  High  </strong> {props.data[x].high_24h} 
                                                    <strong>  Low  </strong> {props.data[x].low_24h} -----
                                                </span>
                                        )
                }
            </Message>
        </div>

    )

}

