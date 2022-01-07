import React, {useState, createContext} from 'react'
import Portfolio from './Portfolio'
import TableBody from './TableBody'

export const PortfolioContext = createContext()

export const PortfolioProvider = (props) => {
    
    const [portfolio, setPortfolio] = useState([])

    return (
        <PortfolioContext.Provider value={[portfolio, setPortfolio]}>
            {props.children}
        </PortfolioContext.Provider>
    )

}

