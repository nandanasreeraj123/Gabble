import React from 'react';
import './post.css'
export default function Postss(){
    return(
    <div   >
        <div>
        <input className="gt" placeholder="Gab Title"></input>
        </div>

        <div >
            <input className="ng " type="text"></input>
        </div>
        <div>
            <a href='/gab'>
            <button className="bn">Post</button></a>
        </div>

    </div>
    );
}