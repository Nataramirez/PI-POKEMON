/*eslint-disable*/
import React, { useEffect } from "react";
import { connect } from "react-redux"
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Pokemon from "../pokemon/pokemon.js"
import {
    searchAllPokemon,
    getTypesPokemon,
    pages, 
} from "../../redux/actions/index"

function Home({ pokemons, pageItems, sortPokemons, searchAllPokemon, getTypesPokemon, pages}) {

    useEffect(() => {
        searchAllPokemon();
        getTypesPokemon()
    }, [])

    function next() {
        // 7 > 7
        if(sortPokemons.length > 0 ? sortPokemons.slice(pageItems, pageItems +9).length > sortPokemons.length % 9 :
         pokemons.slice(pageItems, pageItems + 9).length > pokemons.length % 9){
            pages(pageItems + 9) 
        }
       
    }

    function back() {
        if(pageItems > 0){
        pages(pageItems - 9)
        }
    }

    return (
        <>
            <Navbar />
            <hr />
            <Header />
            <hr />
            <div>

                <button onClick={back} >Back</button>
                <button onClick={next} >Next</button>
                {
                    sortPokemons.length > 0 ? sortPokemons.slice(pageItems, pageItems + 9).map((pokemon) => {
                        return (
                            <div  >
                                <Pokemon key={pokemon.id + pokemon.name} image={pokemon.image}
                                    name={pokemon.name}
                                    types={pokemon.types} id={pokemon.id} />
                            </div>
                        )
                    }) : pokemons.length > 0 ? pokemons.slice(pageItems, pageItems + 9).map((pokemon) => {
                        return (
                            <div  >
                                <Pokemon key={pokemon.id + pokemon.name} image={pokemon.image}
                                    name={pokemon.name}
                                    types={pokemon.types} id={pokemon.id} />
                            </div>
                        )
                    }) : <h1>Cargando...</h1>
                }
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons,
        sortPokemons: state.sortPokemons,
        types: state.types,
        pageItems: state.pages,
    }
}

export default connect(mapStateToProps, { searchAllPokemon, getTypesPokemon, pages })(Home)
