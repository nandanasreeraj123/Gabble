import React, {useState} from "react";
import "./maingab.css";
import Heads from '../Header1/head1';
import Homie from './home';
import Posts from './post';
import Likes from './like';
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
        <h3 onClick={(e)=>toggles(1)} className="hpl" style={{color:tog===1?"rgb(243, 222, 36)":"black",backgroundColor:tog===1?"black":"rgb(243, 222, 36)" }}>Home</h3>
        <h3 onClick={(e)=>toggles(2)}  className="hpl" style={{color:tog===2?"rgb(243, 222, 36)":"black",backgroundColor:tog===2?"black":"rgb(243, 222, 36)" }}>Post</h3>
        <h3 onClick={(e)=>toggles(3)}  className="hpl" style={{color:tog===3?"rgb(243, 222, 36)":"black",backgroundColor:tog===3?"black":"rgb(243, 222, 36)" }}>Like</h3>
      </div>
      {tog===1&&<div className="posts">
      <Homie></Homie>
      </div>}{tog===3&&<div className="posts">
          <Likes></Likes>
      </div>}{tog===2&&
      <div className="posts"><Posts></Posts></div>}
</div>
    </div>
  );
}
