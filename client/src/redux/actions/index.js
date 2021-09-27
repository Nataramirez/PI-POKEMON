import {
    SEARCH_ALL_POKEMON,
    UNMOUNT_ALL_POKEMON,
    SEARCH_POKEMON_NAME,
    SEARCH_POKEMON_ID,
    UNMOUNT_POKEMON_ID,
    GET_TYPES_POKEMON,
    ADD_NEW_POKEMON,
    PAGES,
    SORT_POKEMONS,
    UNMOUNT_SORT_POKEMONS,
    POKEMONS_ORIGIN_FROM,
    ORDER_TYPE_POKEMON
  
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

export function unmountAllPokemons(){
    return {
        type: UNMOUNT_ALL_POKEMON
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
    return function async (dispatch){
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

export function unmountPokemonId(){
    return {
        type: UNMOUNT_POKEMON_ID,
        payload: {}
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

export function pages(value){
   return {
       type: PAGES,
       payload: value
   }
}

export function sortPokemons(order){
    return {
        type: SORT_POKEMONS,
        payload: order
    }
}

export function unmountSortPokemons(){
    return {
        type: UNMOUNT_SORT_POKEMONS
    }
}

export function pokemonsOriginFrom(order){
    return {
        type: POKEMONS_ORIGIN_FROM,
        payload: order
    }
}

export function orderTypePokemon(order){
    return {
        type: ORDER_TYPE_POKEMON,
        payload: order
    }
}