/*eslint-disable*/
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchPokemonId, unmountPokemonId } from '../../redux/actions/index'

function PokemonDetail({ searchPokemonId, pokemonDetail, unmountPokemonId }) {
  console.log(pokemonDetail[0])
  let { id } = useParams()

  useEffect(() => {
    searchPokemonId(id);
    unmountPokemonId()
  }, []);

  return (
    <>
      <div>
        {
          pokemonDetail[0] ? 
          <div>
            <h2>{pokemonDetail[0].name}</h2>
            <img className="img-responsive" height="180" src={pokemonDetail[0].image} alt="Pokemon" />
            <p>N° {pokemonDetail[0].id}</p>

            {
              Array.isArray(pokemonDetail[0].types) && <p>Type: {pokemonDetail[0].types.join(', ')}</p>
            }
            <h5>Stats</h5>
            <ul>
              <p><strong>Hp:</strong> {pokemonDetail[0].hp}</p>
              <p><strong>Attack:</strong> {pokemonDetail[0].attack}</p>
              <p><strong>Defense:</strong> {pokemonDetail[0].defense}</p>
              <p><strong>Speed:</strong> {pokemonDetail[0].speed}</p>
            </ul>

            <p><strong>Weight:</strong> {pokemonDetail[0].weight}</p>
            <p><strong>Height:</strong> {pokemonDetail[0].height}</p>
          </div> : <h1>Cargando...</h1>
        }
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return {
    pokemonDetail: state.pokemonDetail,
  }
}

export default connect(mapStateToProps, { searchPokemonId, unmountPokemonId })(PokemonDetail);

/*
<>

          <div>
            <h2>{pokemonDetail[0].name}</h2>
            <img className="img-responsive" height="180" src={pokemonDetail[0].image} alt="Pokemon" />
            <p>N° {pokemonDetail[0].id}</p>

            {
              Array.isArray(pokemonDetail[0].types) && <p>Type: {pokemonDetail[0].types.join(', ')}</p>
            }
            <h5>Stats</h5>
            <ul>
              <p><strong>Hp:</strong> {pokemonDetail[0].hp}</p>
              <p><strong>Attack:</strong> {pokemonDetail[0].attack}</p>
              <p><strong>Defense:</strong> {pokemonDetail[0].defense}</p>
              <p><strong>Speed:</strong> {pokemonDetail[0].speed}</p>
            </ul>

            <p><strong>Weight:</strong> {pokemonDetail[0].weight}</p>
            <p><strong>Height:</strong> {pokemonDetail[0].height}</p>
          </div>
        </> : null

*/