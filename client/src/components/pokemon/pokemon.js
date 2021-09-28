import './pokemon.css'
import React from 'react';
import imageDefault from '../../pictures/pokemonDefault.png';
import { Link } from 'react-router-dom'

function Pokemon({ name, image, types, id }) {
    return (
        <div className="pokemon">
            <img className="img-responsive" height="160" src={image ? image : imageDefault} alt="Pokemon" />
            <Link to={`pokemons/${id}`} >
            <h3 className="namePokemon">{name}</h3>
            </Link>
            {
                types ? types.map((type) => {
                    return (
                        <div key={id + image}>
                            <span key={id}>{type} </span>
                        </div>
                    )
                }) : <p>Not types</p>
            }
            <br />         

        </div>
    )
}

export default Pokemon;