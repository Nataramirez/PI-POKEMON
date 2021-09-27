import React from 'react';
import imageDefault from '../../pictures/imagePokemon.png'
import { Link } from 'react-router-dom'

function Pokemon({ name, image, types, id }) {
    return (
        <div>
            <img className="img-responsive" height="180" src={image ? image : imageDefault} alt="Pokemon" />
            <Link to={`pokemons/${id}`} >
            <h2>{name}</h2>
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