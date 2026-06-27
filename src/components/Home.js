import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Home() {

    let history = useHistory();

    // NAVIGUER A LA PAGE PRINCIPAL
    const handleClick = () => {
        history.push('/header')
    }

    return (
        <div style={{textAlign: "center", marginTop: "10%", marginBottom: "5%"}}>
            
            <h1 style={{fontSize: "5em", color: "orange", textShadow: "0 0 4px green"}}>ꓘoinFolio</h1>
            <h1 style={{fontSize: "3em", marginBottom: "5%"}}>Welcome!</h1>

            <Button variant="contained" size='large' onClick={handleClick} 
                    style={{padding: "13px 30px", fontWeight: "bold", textShadow: "0 0 2px black"}}>
                Enter!
            </Button>
        </div>
    )
}