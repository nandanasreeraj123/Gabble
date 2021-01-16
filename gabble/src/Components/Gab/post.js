import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import './post.css'

export default function Postss(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);

    let history = useHistory();

    const upload = () => {
            const formData = new FormData();
            formData.append("file", image[0]);
            formData.append("upload_preset", "ee4ghpcv");
            Axios.post(
            `https://api.cloudinary.com/v1_1/dk4j6tgw6/image/upload`,
            formData
            ).then((response) => {
            const fileName = response.data.public_id;
            console.log(title,description,image);
            Axios.post("http://localhost:5000/posts/create", { 
                title: title,
                description: description,
                image: fileName,
                userId: localStorage.getItem("userId"),
            }).then(() => {
                history.push("/gab");
                window.location.reload();
            });
            });
    };

    return(
    <div   >
        <div>
        <input className="gt" type="text" placeholder="Gab Title"  onChange={(event) => {
                setTitle(event.target.value);
        }}></input>
        </div>

        <div >
          <input className="ng "  placeholder="Description" type="text" onChange={(event) => {
                setDescription(event.target.value);
          }}></input>
        </div>

        <input type="file" onChange={(e) => setImage(e.target.files)} />
        <div>
            {/* <a href='/gab'> */}
            <button className="bnn" onClick={upload}>Post</button>
            {/* </a> */}
        </div>

    </div>
    );
}