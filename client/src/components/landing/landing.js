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
        <main className="landing">
           <Link to='/pokemons'>
               <div className="landingButton"></div>
           </Link>
        </main>
    )

}


export default Landing;