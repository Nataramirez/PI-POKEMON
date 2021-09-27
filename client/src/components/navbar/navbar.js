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
        <nav> 
                <h3>Pokemons Api</h3>
                <Link to="/pokemons"><button onClick={handleUnmountAllPokemons} type="button" >Home</button></Link>
                <Link to="/create"><button type="button" >Create</button></Link>
                
        </nav>
    )

}

export default Navbar;