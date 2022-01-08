import React from "react"
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Home from "./components/Home"
import Header from './components/Header'
import { Container } from "semantic-ui-react"
import { PortfolioProvider } from "./components/PortfolioContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom"


function App() {

  return (
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

    </PortfolioProvider>


  )
}

export default App;


