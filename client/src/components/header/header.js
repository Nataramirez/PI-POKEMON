/*eslint-disable*/
import './header.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {
    searchPokemonName,
    searchAllPokemon,
    sortPokemons,
    unmountSortPokemons,
    unmountAllPokemons,
    pages,
    pokemonsOriginFrom,
    orderTypePokemon
} from '../../redux/actions/index'

function Header() {
    const pokemons = useSelector(state => state.pokemons)
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")


    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSearch = () => {
        dispatch(unmountSortPokemons())
        dispatch(searchPokemonName(input))
        setInput("")
        dispatch(pages(0))

    }

    const handleSearchAllPokemon = () => {
        dispatch(pages(0))
        dispatch(unmountAllPokemons())
        dispatch(unmountSortPokemons())
        dispatch(searchAllPokemon())
    }

    const handleOrder = (event) => {
        
        dispatch(pages(0))
        dispatch(unmountSortPokemons())
        dispatch(sortPokemons(event.target.value))

    }

    const handleOriginFrom = (event) => {
        dispatch(pages(0))
        dispatch(unmountSortPokemons())
        dispatch(pokemonsOriginFrom(event.target.value))
    }

    const handleOrderTypePokemon = (event) => {
        dispatch(pages(0))
        dispatch(unmountSortPokemons())
        dispatch(orderTypePokemon(event.target.value))
    }

    return (
        <>
            <header className="header">
                <div >
                    <input
                        className="searchName"
                        id="name"
                        name="name"
                        type="search"
                        placeholder="Search by name here..."
                        onChange={handleInput}
                        value={input}

                    />
                    <button className="btn" onClick={handleSearch} >Search</button>
                </div>
                <button className="sortHeader" onClick={handleSearchAllPokemon} >All Pokemons</button>
                {
                    pokemons.length === 1 ?
                        <>
                            <select disabled>
                                <option>Order by...</option>
                                <option value="A-Z" >Name A-Z</option>
                                <option value="Z-A">Name Z-A</option>
                                <option value="minToMax">Attack min-max</option>
                                <option value="maxToMin">Attack max-min</option>
                            </select>
                            <select disabled>
                                <option>Origin from...</option>
                                <option value="db">Database</option>
                                <option value="api">Api</option>
                            </select>
                            <select disabled>
                                <option>Types...</option>
                                {
                                    types.length > 0 ? types.map((type) => {
                                        return (
                                            <>
                                                <option key={type[0].id_type} value={type[0].id_type}>{type[0].name}</option>
                                            </>
                                        )
                                    }) : null
                                }

                            </select>
                        </> :
                        <>
                            <select className="sortHeader" onChange={(e) => handleOrder(e)} >
                                <option className="sortOption" >Order by...</option>
                                <option className="sortOption" value="A-Z" >Name A-Z</option>
                                <option className="sortOption" value="Z-A">Name Z-A</option>
                                <option className="sortOption" value="minToMax">Attack min-max</option>
                                <option className="sortOption" value="maxToMin">Attack max-min</option>
                            </select>
                            <select className="sortHeader" onChange={(e) => handleOriginFrom(e)} >
                                <option>Origin from...</option>
                                <option value="db">Database</option>
                                <option value="api">Api</option>
                            </select>
                            <select className="sortHeader" onChange={(e) => handleOrderTypePokemon(e)}>
                                <option>Types...</option>
                                {
                                    types.length > 0 ? types.map((type) => {
                                        return (
                                            <>
                                                <option key={type[0].id_type} value={type[0].name}>{type[0].name}</option>
                                            </>
                                        )
                                    }) : null
                                }

                            </select>
                        </>
                }


            </header>
        </>
    )
}

export default Header;