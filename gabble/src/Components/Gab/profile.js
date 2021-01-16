import React, { useEffect, useState } from "react";
import "./maingab.css";
import { Image } from "cloudinary-react";
import {BsHeartFill} from 'react-icons/bs';
import Heads from '../Header1/head1';
import Axios from "axios";
import {IconContext} from 'react-icons';

import { useHistory } from "react-router-dom";


export default function Profile(){

    const [yourUploads, setYourUploads] = useState([]);

    useEffect(() => {
        Axios.get(
          `http://localhost:5000/posts/findByUserId/${localStorage.getItem("userId")}`
        ).then((response) => {
            console.log(response)
          setYourUploads(response.data.post);
        });
      },[]);

    return(
    <div>
            
          <h1>{localStorage.getItem("username")}</h1>
          {yourUploads.map((val, key) => {
           return(
            <div className="posts1">
                <div>
                      <div className="Image">
                        <Image cloudName="dk4j6tgw6" publicId={val.image} />
                      </div>
                      <p className="ph">{val.title} </p>
                      <p> by @{val.users.username}</p>
                      <div className="pb">
                        <p>{val.body}</p>
                        <p>{val.likes}</p>

                      </div>
                      <div className="flexes9">

                      {/* <IconContext.Provider value={{size:"3.5%", color:"rgb(255, 255, 195)"}}>
                      <BsHeartFill >
                      </BsHeartFill>
                      </IconContext.Provider> */}
                      </div> 
                </div>
            </div>
          )
      })}
    </div>);
}