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

const inicialState = {
    pokemons: [],
    sortPokemons: [],
    types: [],
    pokemonDetail: {},
    pages: 0,
}

const pokemonReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SEARCH_ALL_POKEMON:
            return {
                ...state,
                pokemons: action.payload
            }
        case UNMOUNT_ALL_POKEMON:
            return {
                ...state,
                pokemons: [],
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
        case UNMOUNT_POKEMON_ID:
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
                pokemons: [...state.pokemons, action.payload]
            }
        case PAGES:
            return {
                ...state,
                pages: action.payload
            }
        case SORT_POKEMONS:
            return {
                ...state,
                sortPokemons: state.pokemons.sort(function(a, b){
                    if(action.payload === 'A-Z') return a.name.localeCompare(b.name);
                    if(action.payload === 'Z-A') return b.name.localeCompare(a.name);
                    if(action.payload === 'minToMax') return (a.attack) - (b.attack);
                    if(action.payload === 'maxToMin') return (b.attack) - (a.attack);
                    
                })
            }
        case UNMOUNT_SORT_POKEMONS:
            return{
                ...state,
                sortPokemons: [],
            }
        case POKEMONS_ORIGIN_FROM:
            let originPokemon = state.pokemons.filter((pokemon) => { 
                if(action.payload === 'api'){
                    if(!isNaN(pokemon.id)) return pokemon;
                }
                if(action.payload === 'db'){
                    if(isNaN(pokemon.id)) return pokemon;
                }
            })
            if(originPokemon.length === 0){
                originPokemon.push('pokemon not found with this type')
            }

            return {
                ...state,
                sortPokemons: originPokemon
            }
        case ORDER_TYPE_POKEMON:
            let orderPokemonByType = [];
            state.types.forEach(type => {
                if(action.payload === type[0].name){
                    state.pokemons.forEach(pokemon => {
                        if(pokemon.types.includes(action.payload)){
                            orderPokemonByType.push(pokemon)
                        }
                    })
                }
            })
            if(orderPokemonByType.length === 0){
                orderPokemonByType.push('pokemon not found with this type')
            }       
            return {
                ...state,
                sortPokemons: orderPokemonByType,
            }
            
        default: return state;
    }
}

export default pokemonReducer;