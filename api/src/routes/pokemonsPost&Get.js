const { Pokemon, Type } = require('../db');
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.post('/', async function (req, res) {

    try {
        const { name, hp, attack, defense, speed, height, weight, image, type } = req.body;

        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
        });
        type.forEach(async e => {
            await newPokemon.addType(e)
        });
        return res.json(newPokemon);

    } catch (error) {
        res.send(error)

    }
})

router.get('/', async function (req, res) {
    var pokemonsApi = [];
    var pokemonsDb = [];


    try {

        const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2")
        //console.log(pokemons.data.results)

        for (let i = 0; i < pokemons.data.results.length; i++) {
            const pokemon = (await axios.get(pokemons.data.results[i].url)).data
            let typePokemon = [];

            pokemon.types.forEach(e => {
                typePokemon = [...typePokemon, e.type.name];
            })

            pokemonsApi = [...pokemonsApi, {
                name: pokemon.name,
                id: pokemon.id,
                weight: pokemon.weight,
                height: pokemon.height,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                imegen: pokemon.sprites.other['official-artwork'].front_default,
                types: typePokemon
            }]
        }

        const pokemonList = await Pokemon.findAll({
            include: [{
                model: Type,
                attributes: {
                    exclude: ['id_type']
                },
                through: {
                    attributes: []
                },
            }],
            attributes: {
                exclude: ['id_pokemon', 'hp', 'attack', 'defense', 'speed', 'height', 'weight'],
            }
        })      
    
        //console.log(pokemonsDb)
        //res.send(pokemonsApi)
        res.send(pokemonList)

    } catch (error) {
        res.send(error)

    }
})

module.exports = router;