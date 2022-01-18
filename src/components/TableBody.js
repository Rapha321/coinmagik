import React, { useState, useEffect, useContext } from "react"
import { Button, Container } from "semantic-ui-react"
import ChartIndividual from "./ChartIndividual"
import {PortfolioContext}  from "./PortfolioContext"
import { toast } from 'react-toastify';


// recu props de AllCoins.js
export default function TableBody(props) {

    const [display, setDisplay] = useState("none")
    const [buttonStatus, setButtonStatus] = useState("Acheter")
    const [hover, setHover] = useState(false)
    
    // On utilise/set les state definir dans PortfolioContext.js
    const [portfolio, setPortfolio] = useContext(PortfolioContext)

    // Si un coin est inclus dans le portfolio (ca veux dire que le user a deja 
    // acheter ce coin), change le contenu du bouton a 'Vendre'
    useEffect(() => {
        for (let element of portfolio) {
            if (element.coin === props.symbol) {
                setButtonStatus("Vendre")
            }
        }
    }, [portfolio])


    // Quand le user ecrit quelque chose dans le champ Search, affiche seulement
    // les row qui contient le contenu du mot rechercher
    const afficher = () => {
        if (props.search === "" || props.id.includes(props.search)) {
            return "inline-block";
        } else {
            return "none";
        }
    }

    // Si le user click sur un row, set display a 'inline-block' sinon a 'none'
    const handleClick = () => {
        if (display === "none") {
            setDisplay("inline-block");
        } else {
            setDisplay("none")
        }
    }

    // Fonction pour ajouter des virgule dans un chiffre
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
        paddingRight: '60px',
        display: afficher()
    }

    // Si le user achete un coin, change le contenu du bouton a 'vendre' et vice versa
    const changeButtonStatus = () => {
        if (buttonStatus === "Acheter") {
            setButtonStatus("Vendre")
        } else {
            setButtonStatus("Acheter")
        }
    }

    // Quand le user hover sur un row, change le couleur du row
    const backgroundOnHover = hover ? "#afeeee" : "#e0ffff"


    return (
        <Container>
            
            {/* DEFINIR LE ROW POUR CHAQUE COIN */}
            <tr style={{backgroundColor: backgroundOnHover}} 
                key={props.symbol} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <td width="70px" style={{display: afficher()}} onClick={handleClick} > <img alt="logo" src={props.img} width="25px"/> </td>
                <td width="200px" style={{display: afficher()}} onClick={handleClick} > {props.id} </td>
                <td width="200px" align="right" style={styles} onClick={handleClick} > {addCommas(props.prix.toFixed(4))} </td>
                <td width="200px" align="right" style={styles} onClick={handleClick} > {props.prixChange.toFixed(5)} </td>
                <td width="200px" align="right" style={styles} onClick={handleClick} > {addCommas(props.volTotal)} </td>
                <td width="150px" style={{display: afficher()}}> 
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
                                setPortfolio(prev => [...prev, {
                                                                    img: props.img,    
                                                                    coin: props.symbol, 
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

            {/* DEFINIR LE DIAGRAMME ET INFO ADDITIONNEL POUR CHAQUE COIN */}
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
                        <table className="innerTable">
                            <tr >
                                <td>Symbol:</td>
                                <td><strong>{props.symbol}</strong></td>
                            </tr>
                            <tr>
                                <td>Rang de capitalisation:</td>
                                <td><strong>{props.rangCap}</strong></td>
                            </tr>
                            <tr>
                                <td>Approvisionnement total:</td>
                                <td><strong>{addCommas(props.totalSupply)}</strong></td>
                            </tr>
                            <tr>
                                <td>Approvisionnement maximum: </td>
                                <td><strong>{addCommas(props.maxSupply)}</strong></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br/>
            </tr>
        </Container>
    ) 

}


