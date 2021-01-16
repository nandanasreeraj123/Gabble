import React, {useState} from "react";
import "./maingab.css";
import Heads from '../Header1/head1';
import Homie from './home';
import Posts from './post';
import Likes from './like';
import Profile from './profile';
export default function Gabble() {
  const [tog,setTog]=useState(1);
  const toggles = (e) =>{
      setTog(e);
  }
  return (
      <div>
      <Heads></Heads>
    <div className="flexes">
      <div className="menus">
        <h3 onClick={(e)=>toggles(1)} className="hpl" style={{color:tog===1?"#E6E294":"black",backgroundColor:tog===1?"black":"#E6E294" }}>Home</h3>
        <h3 onClick={(e)=>toggles(2)}  className="hpl" style={{color:tog===2?"#E6E294":"black",backgroundColor:tog===2?"black":"#E6E294" }}>Post</h3>
        <h3 onClick={(e)=>toggles(3)}  className="hpl" style={{color:tog===3?"#E6E294":"black",backgroundColor:tog===3?"black":"#E6E294" }}>Profile</h3>
      </div>
      {tog===1&&<div className="posts">
      <Homie></Homie>
      </div>}{tog===3&&<div className="posts">
          <Profile></Profile>
      </div>}{tog===2&&
      <div className="posts"><Posts></Posts></div>}
</div>
    </div>
  );
}
