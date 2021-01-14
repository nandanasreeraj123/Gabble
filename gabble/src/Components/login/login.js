import React,{ useState } from 'react';
import './login.css';
import Heads from '../Header1/head1';
import Axios from "axios";

import { useHistory } from "react-router-dom";


export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let history = useHistory();

    const login = () => {
        Axios.post("http://localhost:5000/users/sign-in", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.loggedIn) {
            localStorage.setItem("loggedIn", true);
            localStorage.setItem("username", response.data.username);
            history.push("/gab");
          } else {
            setErrorMessage(response.data.message);
          }
        });
      };

    return(
    <div>
       <Heads></Heads>  
    
    
    <div  className="login">
        <div className="flexes2">
            <div  className="wd"><p>Username</p></div>
            <div   className="wdip"><input className="ip" type="text" placeholder="username" onChange={(event) => {
                setUsername(event.target.value);
                }}></input>
            </div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Password</p></div>
            <div   className="wdip"><input className="ip"  type="password" placeholder="password" onChange={(event) => {
                setPassword(event.target.value);
                }}></input></div>
        </div>
        
        <div>
            {/* <a href='/gab'> */}
                <button className="bn" onClick={login}>Submit</button>
                {/* </a> */}
            {errorMessage}
        </div>
        
        
    </div>
    </div>);
}