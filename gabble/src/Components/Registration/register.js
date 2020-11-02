import React from 'react';
import './register.css';
export default function Reg(){
    return(<div style={{backgroundImage:"none"}} className="reg">


        <div className="flexes2">
            <div className="wd"><p>Name</p></div>
            <div  className="wdip"><input className="ip" placeholder="Name"></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Email ID</p></div>
            <div   className="wdip"><input className="ip" placeholder="Email"></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Username</p></div>
            <div   className="wdip"><input className="ip" placeholder="username"></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Password</p></div>
            <div   className="wdip"><input className="ip"  type="password" placeholder="password"></input></div>
        </div>
        <div className="flexes2">
            <div  className="wd"><p>Confirm Password</p></div>
            <div   className="wdip"><input className="ip"  type="password"  placeholder="password"></input></div>
        </div>
        <div>
          <a href='/intro'>  <button className="bn">Submit</button></a>
        </div>
        
        
    </div>);
}