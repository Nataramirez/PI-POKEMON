import React from 'react';
import Navbar from '../navbar/navbar';

function NewPokemon() {
    return (
        <>
            <Navbar />
            <hr />
            <form>
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Write here..."
                        autocomplete="off"
                        pattern="^[A-Za-z]+$"
                        title="The field only accepts letters."
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="hp">
                    Hp:
                    <input
                        id="hp"
                        type="number"
                        name="hp"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="attack">
                    Attack:
                    <input
                        id="attack"
                        type="number"
                        name="attack"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="defense">
                    Defense:
                    <input
                        id="defense"
                        type="number"
                        name="defense"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="speed">
                    Speed:
                    <input
                        id="speed"
                        type="number"
                        name="speed"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="height">
                    Height:
                    <input
                        id="height"
                        type="number"
                        name="height"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="weight">
                    Weight:
                    <input
                        id="weight"
                        type="number"
                        name="Weigt"
                        placeholder="Write here..."
                        min="0"
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="Image">
                    Image:
                    <input
                        id="image"
                        type="file"
                        name="Image"
                    />
                </label>
                <br />
                <h4>Types</h4>
                <label htmlFor="types" required>
                    Normal
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Fighting
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Flying
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Poison
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Ground
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <br />
                <label htmlFor="types" required>
                    Rock 
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Bug
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Ghost 
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Steel
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Fire
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <br />
                <label htmlFor="types" required>
                    Water
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Grass
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Electric
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Psychic
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Ice
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <br />
                <label htmlFor="types" required>
                    Dragon
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Dark
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Fairy
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Unknown
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <label htmlFor="types" required>
                    Shadow
                    <input
                        id="types"
                        type="checkbox"
                        name="types"
                        placeholder="Write here..."
                        
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default NewPokemon;
