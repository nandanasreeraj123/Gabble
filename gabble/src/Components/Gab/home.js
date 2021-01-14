import React, { useEffect, useState } from "react";
import "./maingab.css";
import { Image } from "cloudinary-react";
import Axios from "axios";
import {BsHeartFill} from 'react-icons/bs';
import {BiCommentDetail} from 'react-icons/bi';

import {IconContext} from 'react-icons';
export default function Homies() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/posts/findAll").then((response) => {
      setUploads(response.data.allpost);
    });
  }, []);

const likePost = (id,key) => {
    var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("http://localhost:5000/posts/like", {
        userId: localStorage.getItem("userId"),
        postId: id,
    }).then((response) => {
      setUploads(tempLikes);
      console.log("u liked");
    });
};
  
  return (
    <div>
      {
      uploads.map((val,key) => {
        {console.log(val)}
          return(
              <div className="posts1">
                  <div>
                        <div className="Image">
                          <Image cloudName="dk4j6tgw6" publicId={val.image} />
                        </div>
                        <p className="ph">{val.title} </p>
                        <p> by @{val.author}</p>
                        <div className="pb">
                          <p>{val.body}</p>
                          <p>{val.likes}</p>

                        </div>
                        <div className="flexes9">

                        <IconContext.Provider value={{size:"3.5%", color:"rgb(255, 255, 195)"}}>
                        <BsHeartFill onClick={() => {
                            likePost(val.id, key);
                        }}>
                        </BsHeartFill>
                        </IconContext.Provider>
                        {/* {e.like===0&&<IconContext.Provider value={{size:"3.5%", color:"rgb(255, 255, 195)"}}>
                            <BsHeartFill onClick={(j)=>likes(e.id)}>

                            </BsHeartFill>
                        </IconContext.Provider>
                        } */}
                        {/* {e.like===1&&
                        <IconContext.Provider value={{size:"3.5%", color:"red"}}>
                            <BsHeartFill onClick={(j)=>likes(e.id)}>

                            </BsHeartFill>
                        </IconContext.Provider>} */}
            {/* <IconContext.Provider value={{size:"3.5%"}}>
                            <BiCommentDetail  className="cmt"></BiCommentDetail>
                        </IconContext.Provider> */}
                        </div> 
                  </div>
              </div>
            )
          }
      )
  }
  </div>
  )
}
