import React from 'react';
import './landing.css';
export default function Lands(){
    return(<div className="bg">
        <img className="im" src="images\Gabble.png" alt="gabble">
            
        </img>
        <div className="flexes1">
            <div>
            <a href="/reg">
            <p>Sign Up</p></a></div>
            <div>
            <p>   /  </p></div>
            <div>
                <a href="/login">
            <p>Sign In</p></a></div></div>
    </div>);
}