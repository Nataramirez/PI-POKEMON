import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux"
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Pokemon from "../pokemon/pokemon.js"
import { searchAllPokemon, 
    searchPokemonId,
    getTypesPokemon,
    } from "../../redux/actions/index"


function Home({ pokemons, searchAllPokemon, searchPokemonId }) {
    useEffect(() => {
        searchAllPokemon()
    }, [searchAllPokemon])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypesPokemon())
    },[dispatch])
    
   

    return (
        <>
            <Navbar />
            <hr />
            <Header />
            <hr />
            <div>
                {
                    pokemons ? pokemons.map((pokemon, i) => {
                        return (
                            <Pokemon key={i} image={pokemon.image} name={pokemon.name} types={pokemon.types} />
                        )
                    }) : null
                }
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
    }
}

export default connect(mapStateToProps, { searchAllPokemon, searchPokemonId})(Home)