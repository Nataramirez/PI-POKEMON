import React, { useState } from "react";

function Header() { 
    const [input, setInput] = useState({
        name: ''
    })

    return (
        <>
        <header>
            <form>
                <label htmlFor="name">Search Pokemon
                <br/>
                    <input
                    id="name"
                    name="name"
                    type="search"
                    placeholder="Write name here..."
                    autocomplete="off"
                    />
                </label>
                <button>Search</button>
                <button>All Pokemons</button>
            </form>
        </header>
        </>
    )
}

export default Header;