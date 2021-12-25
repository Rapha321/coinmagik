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


export default function TopTenResult(props) {

    return (
        <div>

            <div className="topTen-section">
                <div>
                    <br/><br/>
                    <LineChart width={700} height={200} data={props.topTenData}>
                    <br/>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey={`n${props.i + 1}`} padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Line type="linear" dataKey={`p${props.i + 1}`} stroke="#8884d8" />
                    </LineChart>
                </div>

                <Card>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={props.topten[`url${props.i + 1}`]}
                    />
                    <Card.Header>{props.topten[`n${props.i + 1}`]}</Card.Header>
                    <Card.Meta>Rang de capitalisation boursière: {props.topten[`rank${props.i + 1}`]} </Card.Meta>
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

        </div>
    )

}