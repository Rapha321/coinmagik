import React, {useState, createContext} from 'react'

// On utilise le hook useContext() pour pouvoir passer les information bi-directionnel

export const PortfolioContext = createContext()

export const PortfolioProvider = (props) => {
    
    const [portfolio, setPortfolio] = useState([])

    return (
        // On passe le state portfolio comme props au children. 
        // Les children sont definir dans App.js
        <PortfolioContext.Provider value={[portfolio, setPortfolio]}>
            {props.children}
        </PortfolioContext.Provider>
    )

}

