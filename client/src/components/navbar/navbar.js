import './navbar.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { unmountAllPokemons,
     searchAllPokemon, 
     unmountSortPokemons
} from '../../redux/actions/index'

function Navbar() {
    const dispatch = useDispatch()
    function handleUnmountAllPokemons() {
        dispatch(unmountSortPokemons())
        dispatch(unmountAllPokemons())
        dispatch(searchAllPokemon())
    }
   

    return (
        <nav className="navbar"> 
            <div className="navbarButton">
                <Link to="/pokemons"><button onClick={handleUnmountAllPokemons} type="button" >Home</button></Link>
               <div className="pokemonName"></div>
                <Link to="/create"><button type="button" >Create</button></Link>
                </div>
        </nav>
    )

}

export default Navbar;