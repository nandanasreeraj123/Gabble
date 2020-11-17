import React from 'react';
import './login.css';
import Heads from '../Header1/head1';
export default function Login(){
    return(
    <div>
       <Heads></Heads>  
    
    
    <div  className="login">


         
        <div className="flexes2">
            <div  className="wd"><p>Username</p></div>
            <div   className="wdip"><input className="ip" placeholder="username"></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Password</p></div>
            <div   className="wdip"><input className="ip"  type="password" placeholder="password"></input></div>
        </div>
        
        <div>
            <a href='/gab'><button className="bn">Submit</button></a>
        </div>
        
        
    </div>
    </div>);
}