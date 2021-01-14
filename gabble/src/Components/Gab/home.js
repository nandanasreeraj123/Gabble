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

// TODO:likePost

    const likes=(j)=>{
        for (let i = 0; i < posts.length; i++) {
            const element = posts[i];
            if(element.id===j && element.like===0){
                element.like=1;
                console.log(element.like);
            }else if(element.id===j && element.like===1){
                element.like=0;
            }
            
        }
        console.log(posts);
    }
  var posts = [
    {id:1,
      name: "Post 1",
      like: 0,
      content:
        "some random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1",
    },
    {id:2,
      name: "Post 2",
      like: 0,
      content:
        "some random conent for post 2 some random content for post 1 ome random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1",
    },
    {id:3,
      name: "Post 3",
      like: 0,
      content:
        "some random conent for post 3 some random content for post 1 ome random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1",
    },
    {id:4,
      name: "Post 4",
      like: 0,
      content:
        "some random conent for post 4 some random content for post 1 ome random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1",
    },
    {id:5,
      name: "Post 5",
      like: 0,
      content:
        "some random conent for post 5 some random content for post 1 ome random conent for post 1 some random content for post 1 ome random conent for post 1 some random content for post 1",
    },
  ];
  return (
    <div>
      {
      uploads.map((val) => {
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
                        </div>
                        <div className="flexes9">
                            
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
