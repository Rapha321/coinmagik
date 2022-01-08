import React from "react"
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { Container } from "semantic-ui-react"
import { PortfolioProvider } from "./components/PortfolioContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <PortfolioProvider>
      <Header />

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

    </PortfolioProvider>


  )
}

export default App;


