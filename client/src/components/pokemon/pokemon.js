import React from 'react';

function Pokemon({ name, image, types }) {
    return (
        <div>
            <img className="img-responsive" height="180" src={image} alt="Pokemon" />
            <h2>{name}</h2>
            {
                Array.isArray(types) ? <p>Type: {types.join(', ')}</p> : null
            }
            
        </div>
    )
}

export default Pokemon;