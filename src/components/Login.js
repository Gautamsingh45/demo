import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import image1 from './image/log.png'

import "../components/login.css";
function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:2001/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login container-fluid">
           
                <div className="logo">
                    <img src={image1} width={"100%"} height={"100%"} ></img>
                
                <div className="col-10"></div>
            </div>
            <div className="row a">
            <div className="col-6 b1">
                <h1>Learning Management System</h1>
            </div>
            <div className="col-5 offset-1 b2">

            <form action="POST">
            <h1>Login</h1>
               <label>userName:</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br></br>
                <label>Password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
            </div>
         </div>
        </div>
    )
}

export default Login
