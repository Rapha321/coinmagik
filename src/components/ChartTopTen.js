import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Button, Card, Container, Image } from "semantic-ui-react";

export default function ChartTopTen(props) {

  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    let isMounted = true;
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.cur}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
    .then(res => res.json())
    .then(info => setData(prev => info))
    return () => {isMounted = false};
  }, [props.cur])


  let topTen = [ 
                { rank1: 1, n1:"", url1:"", p1:0 }, 
                { rank2: 1, n2:"", url2:"", p2:0 }, 
                { rank3: 1, n3:"", url3:"", p3:0 }, 
                { rank4: 1, n4:"", url4:"", p4:0 },
                { rank5: 1, n5:"", url5:"", p5:0 }, 
                { rank6: 1, n6:"", url6:"", p6:0 },
                { rank7: 1, n7:"", url7:"", p7:0 },
                { rank8: 1, n8:"", url8:"", p8:0 },
                { rank9: 1, n9:"", url9:"", p9:0 },
                { rank10: 1, n10:"", url10:"", p10:0 }
            ]


   data.map(x => {
                for (let i = 0; i < 10; i++) {
                    if (x.market_cap_rank === i+1) {
                      topTen[i][`rank${i+1}`]= x.market_cap_rank
                      topTen[i][`n${i+1}`]= x.name
                      topTen[i][`url${i+1}`]= x.image
                      topTen[i][`p${i+1}`]=x.sparkline_in_7d.price
                    }
                }
           })


  let prix = {};
  let topTenData = [];
  let n = 1;


  for (let i = 1; i < 160; i+=5) {

    for (let item of topTen) {
      prix[`p${n}`] = item[`p${n}`][i]
      if (n === 10) {
        n = 1;
      } else {
        n++;
      }
      
    }
    topTenData.push(prix)
    prix = {}

  }


return (

    <Container fluid>
      <br/>
      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n1" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p1" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[0]['url1']}
              />
              <Card.Header>{topTen[0][`n${1}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[0][`rank${1}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n2" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p2" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[1]['url2']}
              />
              <Card.Header>{topTen[1][`n${2}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[1][`rank${2}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n3" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p3" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[2]['url3']}
              />
              <Card.Header>{topTen[2][`n${3}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[2][`rank${3}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n4" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p4" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[3]['url4']}
              />
              <Card.Header>{topTen[3][`n${4}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[3][`rank${4}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n5" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p5" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[4]['url5']}
              />
              <Card.Header>{topTen[4][`n${5}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[4][`rank${5}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n6" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p6" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[5]['url6']}
              />
              <Card.Header>{topTen[5][`n${6}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[5][`rank${6}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n7" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p7" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[6]['url7']}
              />
              <Card.Header>{topTen[6][`n${7}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[6][`rank${7}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n8" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p8" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[7]['url8']}
              />
              <Card.Header>{topTen[7][`n${8}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[7][`rank${8}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n9" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p9" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[8]['url9']}
              />
              <Card.Header>{topTen[8][`n${9}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[8][`rank${9}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>

      <hr/>

      <div className="topTen-section">
          <div>
            <br/><br/>
            <LineChart width={700} height={200} data={topTenData}>
              <br/>
              <CartesianGrid strokeDasharray="1 1" />
              <XAxis dataKey="n10" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="p10" stroke="#8884d8" />
            </LineChart>
          </div>

          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src={topTen[9]['url10']}
              />
              <Card.Header>{topTen[9][`n${10}`]}</Card.Header>
              <Card.Meta>Rang de capitalisation boursière: {topTen[9][`rank${10}`]}</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ajouter
                </Button>
                <Button basic color='red'>
                  Supprimer
                </Button>
              </div>
            </Card.Content>
          </Card>
      </div>
    </Container>

  )

}
