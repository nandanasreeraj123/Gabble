import React, { useEffect, useState } from "react";
import "./head1.css";
export default function Heads() {

  return (
    <div className="flexes6">
      <div>
        <img className="gabimg" src="images/Gabble.png" alt="gab"></img>
      </div>
      {console.log(localStorage.getItem("loggedIn")=="false")}
      {localStorage.getItem("loggedIn")=="true"? (
        <>
          {/* <a href="/upload">Upload</a> */}
          <a href="/profile">Profile</a>
          <a href="/">Logout</a>
        </>
      ) : (
        <>
          <a href="/reg">Register</a>
          <a href="/login">Login</a>
        </>
      )}
    </div>
  );
}
