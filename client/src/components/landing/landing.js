/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchAllPokemon } from '../../redux/actions/index';

import './landing.css'

function Landing() {
    const dispatch = useDispatch()
    
    useEffect(() => {
       dispatch(searchAllPokemon());
      
    }, [])

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