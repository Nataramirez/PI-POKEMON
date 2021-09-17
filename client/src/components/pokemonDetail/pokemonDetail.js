import React from 'react';

function PokemonDetail({ name, id, image, types, hp, attack, defense, speed, weight, height }) {
    return (
        <div>
            <img className="img-responsive" height="180" src={image} alt="Pokemon" />
            <p>N° {id}</p>
            <h2>{name}</h2>
            {
                Array.isArray(types) ? <p>Type: {types.join(', ')}</p> : null
            }
              <h5>Stats</h5>
            <ul>
              <p><strong>Hp:</strong> {hp}</p>
              <p><strong>Attack:</strong> {attack}</p>
              <p><strong>Defense:</strong> {defense}</p>
              <p><strong>Speed:</strong> {speed}</p>
            </ul>

            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Height:</strong> {height}</p>            
        </div>
    )
}

export default PokemonDetail;