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

const inicialState = {
    pokemons: [],
    types: [],
    pokemonDetail: {},
}

const pokemonReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SEARCH_ALL_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        case SEARCH_POKEMON_NAME:
            return {
                ...state,
                pokemons: action.payload
            }
        case SEARCH_POKEMON_ID:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case GET_TYPES_POKEMON:
            return {
                ...state,
                types: action.payload
            }
        case ADD_NEW_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons.concat(action.payload)]
            }
    
        default: return state;
    }
}

export default pokemonReducer;