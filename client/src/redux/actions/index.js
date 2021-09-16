/*
  ORDER_TYPE_POKEMON,
    ORDER_NAME_ASC_POKEMON,
    ORDER_NAME_DESC_POKEMON,
    ORDER_ATTACK_ASC_POKEMON,
    ORDER_ATTACK_DESC_POKEMON
*/

import {
    SEARCH_ALL_POKEMON,
    SEARCH_POKEMON_NAME,
    SEARCH_POKEMON_ID,
    GET_TYPES_POKEMON,
    ADD_NEW_POKEMON
  
} from "../actions/actionsName";

export function searchAllPokemon(){
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: SEARCH_ALL_POKEMON,
                payload: json
            })
        })
    }
}

export function searchPokemonName(name){
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: SEARCH_POKEMON_NAME,
                payload: json
            })
        })
    }
}

export function searchPokemonId(id){
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: SEARCH_POKEMON_ID,
                payload: json
            })
        })
    }
}

export function getTypesPokemon(){
    return function(dispatch){
        fetch(`http://localhost:3001/types`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: GET_TYPES_POKEMON,
                payload: json
            })
        })
    }
}

export function addNewPokemon(payload){
    return function(dispatch){
        fetch(`http://localhost:3001/pokemons`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(res => {
            dispatch({
                type: ADD_NEW_POKEMON,
                payload: res
            })
        })
        .catch(error => console.log(error))
    }
}