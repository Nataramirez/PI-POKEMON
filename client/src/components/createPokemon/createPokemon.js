/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import Navbar from '../navbar/navbar';
import {
    addNewPokemon,
    getTypesPokemon,
    searchAllPokemon
} from '../../redux/actions/index.js'

function NewPokemon({addNewPokemon}) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypesPokemon())
        dispatch(searchAllPokemon())
    }, [])

    const types = useSelector(state => state.types)

    const [input, setInput] = useState({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        image: '',
        types: [],
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        let newTypes = [];
        input.types.forEach(type => {
            newTypes.push(parseInt(type));
        })
        
        let newPokemon = {
            name: input.name,
            hp: parseInt(input.hp),
            attack: parseInt(input.attack),
            defense: parseInt(input.defense),
            speed: parseInt(input.speed),
            height: parseInt(input.height),
            weight: parseInt(input.weight),
            image: input.image,
            type: newTypes
        }
      console.log(newPokemon)

       addNewPokemon(newPokemon);
       setInput({
        name: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        image: '',
        types: [],
       })


    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeTypes = (e) => {
        if (input.types.includes(e.target.value)) {
            setInput({
                ...input,
                types: input.types.filter(type => type !== e.target.value)

            })
        } else {
            setInput({
                ...input,
                types: [...input.types, e.target.value]
            })
        }

    }

    return (
        <>
            <Navbar />
            <hr />
            <form onSubmit={(e) => handleSubmit(e)} >
                <label htmlFor="name">
                    Name:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Write here..."
                        pattern="^[A-Za-z]+$"
                        title="The field only accepts letters."
                        required
                        value={input.name}
                        onChange={handleOnChange}
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
                        value={input.hp}
                        onChange={handleOnChange}
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
                        value={input.attack}
                        onChange={handleOnChange}
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
                        value={input.defense}
                        onChange={handleOnChange}
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
                        value={input.speed}
                        onChange={handleOnChange}
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
                        value={input.height}
                        onChange={handleOnChange}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="weight">
                    Weight:
                    <input
                        id="weight"
                        type="number"
                        name="weight"
                        placeholder="Write here..."
                        min="0"
                        required
                        value={input.weight}
                        onChange={handleOnChange}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="image">
                    Image:
                    <input
                        id="image"
                        type="file"
                        name="Image"
                        value={input.image}
                        onChange={handleOnChange}
                    />
                </label>
                <br />
                <h4>Types</h4>
                {
                    types && types.map((type) => {
                        return (
                            <>

                                <input 
                                    key={type.id_type} 
                                    type="checkbox" 
                                    name={type[0].name} 
                                    value={type[0].id_type} 
                                    id={type[0].id_type} 
                                    onChange={handleChangeTypes} 
                                />
                                <label key={type.id_type}  htmlFor={type[0].name}>{type[0].name}</label>


                            </>
                        )

                    })

                }
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default connect(null, {addNewPokemon})(NewPokemon);
