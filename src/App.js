import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header';
import TableHeader from "./components/TableHeader";
import Chart from './components/Chart';
import Specs from './components/Specs';
import { Container } from "semantic-ui-react";


function App() {


  const [data, setData] = React.useState({
                                              id: "",
                                              img: "",
                                              prix: 0,
                                              prixChange: 0
                                        });

  React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=true")
    .then(res => res.json())
    .then(info => setData(prev => info))
  }, [])


  return (
    <Container>
      <Header />
      <div className="details">
        <div >
          <TableHeader />
          { Object.keys(data).map(x => <Specs id={data[x].id} img={data[x].image} prix={data[x].current_price} prixChange={data[x].price_change_24h}/> ) }
        </div>
        <div className="charts">
          <br/><br/><br/><br/>
          <Chart />
        </div>
      </div>
    </Container>
  );
}

export default App;


