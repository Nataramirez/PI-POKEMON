/*eslint-disable*/
import './pokemonDetail.css'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchPokemonId, unmountPokemonId } from '../../redux/actions/index'
import imagenDefault from '../../pictures/pokemonDefault3.png';
import bug from '../../pictures/types/bug.png';
import dark from '../../pictures/types/dark.png';
import dragon from '../../pictures/types/dragon.png';
import electric from '../../pictures/types/electric.png';
import fairy from '../../pictures/types/fairy.png';
import fighting from '../../pictures/types/fighting.png';
import fire from '../../pictures/types/fire.png';
import flying from '../../pictures/types/flying.png'
import ghost from '../../pictures/types/ghost.png';
import grass from '../../pictures/types/grass.png';
import ground from '../../pictures/types/ground.png';
import ice from '../../pictures/types/ice.png';
import normal from '../../pictures/types/normal.png';
import poison from '../../pictures/types/poison.png';
import psychic from '../../pictures/types/psychic.png';
import rock from '../../pictures/types/rock.png';
import steel from '../../pictures/types/steel.png';
import water from '../../pictures/types/water.png';


function PokemonDetail({ searchPokemonId, pokemonDetail, unmountPokemonId }) {
  //console.log(pokemonDetail[0])
  let { id } = useParams()
  const capitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

  const imageTypes = {
    normal: normal,
    fighting: fighting,
    flying: flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy
  }

  useEffect(() => {
    searchPokemonId(id);
    unmountPokemonId()
  }, []);

  return (
    <>
      <div>
        {
          pokemonDetail[0] ?
            <div className="pokemonDetail">
<div>
                <h3>Stats</h3>
                <ul>
                <p>N° {pokemonDetail[0].id}</p>
                  <p>Hp: {pokemonDetail[0].hp}</p>
                  <p><strong>Attack:</strong> {pokemonDetail[0].attack}</p>
                  <p><strong>Defense:</strong> {pokemonDetail[0].defense}</p>
                  <p><strong>Speed:</strong> {pokemonDetail[0].speed}</p>
                </ul>

                <p><strong>Weight:</strong> {pokemonDetail[0].weight}</p>
                <p><strong>Height:</strong> {pokemonDetail[0].height}</p>

              </div>
              <div>
                {
                  Array.isArray(pokemonDetail[0].types) &&
                  <>
                  <br />
                    <div className="types">
                      {
                        pokemonDetail[0].types.map(type => {
                          for (let property in imageTypes) {
                            if (property === type)
                              return (
                                <>
                                  <img src={imageTypes[type]} height="90" alt="types of pokemon" />

                                  <p>{capitalFirstLetter(type)}</p>
                                </>
                              )
                          }
                        })
                      }
                    </div>
                  </>
                }
              </div>
              
              <div>
                <h2>{pokemonDetail[0].name.toUpperCase()}</h2>
                <img className="img-responsive" height="320" src={pokemonDetail[0].image ? pokemonDetail[0].image : imagenDefault} alt="Pokemon" />
               
              </div>

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