import React, { useContext } from "react"
import {PortfolioContext}  from "./PortfolioContext"

export default function Portfolio(props) {

    const [portfolio, setPortfolio] = useContext(PortfolioContext)

    return (
        <h1>I got this portfolio {portfolio.map(x => <p>{x}</p>) }</h1>
    )
}