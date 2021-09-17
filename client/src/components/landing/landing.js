import React from 'react';
import { Link } from 'react-router-dom';

import './landing.css'

function Landing() {
    return (
        <div>
           
           
            <h1>AQUI VA A IR EL VIDEO DE FONDO</h1>
           <Link to='/pokemons'>
               <button>¡Catch them!</button>
           </Link>
           
           
        </div>
    )

}



export default Landing;