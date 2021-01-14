import React,{ useState } from 'react';
import './register.css';

import Axios from "axios";

export default function Reg(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        console.log(username);
        Axios.post("http://localhost:5000/users/sign-up", {
            username: username,
            name:name,
            email:email,
            password: password,
        }).then((response) => {
            console.log(response);
        });
    };

    return(<div style={{backgroundImage:"none"}} className="reg">
        <div className="flexes2">
            <div className="wd"><p>Name</p></div>
            <div  className="wdip"><input type="text" className="ip" placeholder="Name" onChange={(event)=>{
                                        setName(event.target.value);
                                    }}></input>
            </div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Email ID</p></div>
            <div   className="wdip"><input className="ip" placeholder="Email" type="text" onChange={(event) => {
                                                    setEmail(event.target.value);
                                    }}></input>
            </div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Username</p></div>
            <div   className="wdip"><input className="ip" type="text" placeholder="username" onChange={(event) => {
                                                    setUsername(event.target.value);
                                    }}></input>
            </div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Password</p></div>
            <div   className="wdip"><input className="ip" type="password" placeholder="password" onChange={(event) => {
                                                    setPassword(event.target.value);
                                    }}></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Confirm Password</p></div>
            <div   className="wdip"><input className="ip"  type="password"  placeholder="password"></input></div>
        </div>
        <div>
          <a href='/intro'>  <button className="bn" onClick={register}>Submit</button></a>
        </div>
        
        
    </div>);
}