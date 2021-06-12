import React from 'react'
import AddNewRecord from './AddNewRecord'
import AppBar from './AppBar'
import ShowRecord from './ShowRecord'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    function handleClick() {
        history.push("/addRecord");
      }
    
    return (
        <div className="home">
            <Divider />
            <br></br>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >+ Add New Record</Button>
            <br></br><br></br>
            <Divider />
            <ShowRecord />
           
        </div>
    )
}

export default Home
