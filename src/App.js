import React from "react"
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { Container } from "semantic-ui-react"
import { PortfolioProvider } from "./components/PortfolioContext"


function App() {

  return (
    <PortfolioProvider>
      <Header />
    </PortfolioProvider>
  )
}

export default App;


