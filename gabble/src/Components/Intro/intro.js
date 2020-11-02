import React from 'react';
import './intro.css';
import Heads from '../Header1/head1';
export default function Intro(){
    return(
        <div>
        <Heads></Heads>
        
        <div className="intro">
            <a href='/gab'>
        <img className="cofee" src="images\coffee.png" alt="coffee">
            
        </img>
        <img className="lg" src="images\Lets Gab!!.png" alt="letsgab">

        </img></a>
        
    </div>
    </div>
    );
}