import './pokemon.css'
import React from 'react';
import imageDefault from '../../pictures/pokemonDefault3.png';
import { Link } from 'react-router-dom'

function Pokemon({ name, image, types, id }) {
    const capitalFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return (

        <div className="pokemon">
            <img className="img-responsive" height="160" src={image ? image : imageDefault} alt="Pokemon" />
            <Link to={`pokemons/${id}`} >
                <h3 className="namePokemon">{name.toUpperCase()}</h3>
            </Link>
            {
                types ? types.map((type) => {
                    return (
                        <div key={id + image}>
                            <span key={id}>{capitalFirstLetter(type)} </span>
                        </div>
                    )
                }) : <p>This pokemon has not types</p>
            }
            <br />

        </div>

    )
}

export default Pokemon;