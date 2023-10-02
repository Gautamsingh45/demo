import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()
    const nav = useNavigate()

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10"></div>
                <div className="col-2"><button onClick={()=>nav('/')}>logout</button></div>
            </div>
           
            <h1>Hello {location.state.id} and welcome to the home</h1>
            

        </div>
    )
}

export default Home