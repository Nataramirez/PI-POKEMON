import './navbar.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    unmountAllPokemons,
    searchAllPokemon,
    unmountSortPokemons,
    unmountPokemonId
} from '../../redux/actions/index'

function Navbar() {
    const dispatch = useDispatch()
    function handleUnmountAllPokemons() {
        dispatch(unmountSortPokemons())
        dispatch(unmountAllPokemons())
        dispatch(unmountPokemonId())
        dispatch(searchAllPokemon())
    }


    return (
        <nav className="navbar">
            <div className="navbarButton">
                <Link to="/pokemons"><button className="btn"onClick={handleUnmountAllPokemons} type="button" >Home</button></Link>
                <div className="pokemonName"></div>
                <Link to="/create"><button className="btn" type="button" >Create</button></Link>
            </div>
        </nav>
    )

}

export default Navbar;