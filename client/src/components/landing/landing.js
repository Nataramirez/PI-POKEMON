import React from 'react';
import { Link } from 'react-router-dom';

import './landing.css'

function Landing() {
    return (
        <div>
           
            <video className="myVideo" src="./landingPokemon.mp4" autoPlay >
                
            </video>
            <h1>Landing Pokemon</h1>
           <Link to="/home">Ingresar</Link>
           
           
        </div>
    )

}

export default Landing;