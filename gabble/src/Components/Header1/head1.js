import React, { useEffect, useState } from "react";
import "./head1.css";
import lines from "./Line 1.png";
export default function Heads() {

  return (
    <div>
    <div className="flexes6">
      <div>
        <img className="gabimg" src="images/Gabble.png" alt="gab"></img>
      </div>
      
      
      {console.log(localStorage.getItem("loggedIn")=="false")}
      {localStorage.getItem("loggedIn")=="true"? (
        <>
          {/* <a href="/upload">Upload</a> */}
          <a href="/">Logout</a>
        </>
      ) : (
        <>
          <a href="/reg">Register</a>
          <a href="/login" >Login</a>
        </>
      )}
      </div>
      {/* <span className="l"></span> */}
      <div>
      <img src={lines} alt="line" className="line"/>
      </div>
      
    </div>
  );
}
