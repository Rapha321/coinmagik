import React from "react"
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Home from "./components/Home"
import Header from './components/Header'
import { PortfolioProvider } from "./components/PortfolioContext"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollButton from "./components/ScrollButton"


function App() {

  return (
    // Tous ce qui est wrapped (children) entre <PortfolioProvider> vont avoir acces 
    // au state definir dans PortfolioContext.js
    <PortfolioProvider> 
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact/>
          <Route path={"/header"} component={Header} />
        </Switch>
      </BrowserRouter>

      <ScrollButton/>
    </PortfolioProvider>

  )
}

export default App;


