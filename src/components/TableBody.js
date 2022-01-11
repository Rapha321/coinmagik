import React, { useState, useEffect, useContext } from "react"
import { Button, Container } from "semantic-ui-react"
import ChartIndividual from "./ChartIndividual"
import {PortfolioContext}  from "./PortfolioContext"
import { ToastContainer, toast } from 'react-toastify';

export default function TableBody(props) {

    const [display, setDisplay] = useState("none")
    const [buttonStatus, setButtonStatus] = useState("Acheter")
    const [hover, setHover] = useState(false)
    
    const [portfolio, setPortfolio] = useContext(PortfolioContext)



    useEffect(() => {
        for (let element of portfolio) {
            if (element.coin === props.symbol) {
                setButtonStatus("Vendre")
            }
        }
    }, [portfolio])

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


    const changeButtonStatus = () => {
        if (buttonStatus === "Acheter") {
            setButtonStatus("Vendre")
        } else {
            setButtonStatus("Acheter")
        }
    }

    const backgroundOnHover = hover ? "#afeeee" : "#e0ffff"


    return (
        <Container>
            <tr style={{display: afficher(), backgroundColor: backgroundOnHover}} 
                key={props.symbol} 
                onClick={handleClick} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <td width="70px" > <img alt="logo" src={props.img} width="25px"/> </td>
                <td width="200px" > {props.id} </td>
                <td width="200px" align="right" style={styles}> {addCommas(props.prix.toFixed(4))} </td>
                <td width="200px" align="right" style={styles}> {props.prixChange.toFixed(5)} </td>
                <td width="200px" align="right" style={styles}> {addCommas(props.volTotal)} </td>
                <td width="150px"> 
                    <Button className={buttonStatus === "Acheter" ? "ui mini teal button" : "ui mini orange button"}
                            style={{width:"90px", maxWidth: "90px"}} 
                            onClick={() => {
                                if (buttonStatus === "Vendre") {
                                    changeButtonStatus()
                                    let index = portfolio.findIndex( element => element.coin === props.symbol)
                                    portfolio.splice(index, 1)
                                    setDisplay("none")
                                    toast.success('👍 Vendu avec succes!', {
                                        toastId: 'info2',
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        });
                                }
                                
                                if (buttonStatus === "Acheter") {
                                    changeButtonStatus()
                                    setPortfolio(prev => [...prev, {coin: props.symbol, 
                                                                    prixAchat: props.prix
                                                                    } 
                                                         ])
                                    setDisplay("none")
                                    
                                    toast.success('👍 Ajouter avec succes!', {
                                        toastId: 'info2',
                                        position: "top-right",
                                        autoClose: 2000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        });
                                }}}>
                            {buttonStatus}
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


