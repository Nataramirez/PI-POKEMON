import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    
   

    return (
        <nav> 
                <h3>Pokemons Api</h3>
                <Link to="/pokemons"><button type="button" >Home</button></Link>
                <Link to="/create"><button type="button" >Create</button></Link>
                
        </nav>
    )

}

export default Navbar;