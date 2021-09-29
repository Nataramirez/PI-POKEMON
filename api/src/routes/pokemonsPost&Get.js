const { Pokemon, Type } = require('../db');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Op } = require('sequelize')

// route post new pokemon
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

        for (let index = 0; index < type.length; index++) {
            await newPokemon.addType(type[index]);

        }

        return res.json(newPokemon);

    } catch (error) {
        res.send(error)

    }
})

// route get lista completa y name
router.get('/', async function (req, res) {
    const { name } = req.query;

    var pokemonsApi = [];
    var pokemonsDb = [];
    var fullResponse = [];

    try {
        if (name === undefined) {
            const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=25")
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
                    image: pokemon.sprites.other['official-artwork'].front_default,
                    types: typePokemon,
                    attack: pokemon.stats[1].base_stat
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
                    exclude: ['hp', 'defense', 'speed', 'height', 'weight'],
                }
            })

            pokemonList.forEach(element => {
                let types = [];
                for (let i = 0; i < element.types.length; i++) {
                    types.push(element.types[i].name)
                }

                pokemonsDb = [...pokemonsDb, {
                    name: element.name,
                    image: element.image,
                    id: element.id_pokemon,
                    types: types,
                    attack: element.attack,
                }]
            })
            //res.send(pokemonsApi)
            //res.send(pokemonsDb)

            fullResponse = [...pokemonsDb, ...pokemonsApi];

            return fullResponse.length > 0 ? res.send(fullResponse) : res.send('¡Pokemon not found')
        }

        // get Name 
        if (name) {
            const pokemons = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=25")).data.results
            //console.log(pokemons)
            let responseApi = [];
            for(let i = 0; i < pokemons.length; i++) {
                if(pokemons[i].name === name.toLocaleLowerCase()){
                    responseApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLocaleLowerCase()}`)).data

                    let typePokemon = [];
                    responseApi.types.forEach(e => {
                        typePokemon = [...typePokemon, e.type.name];
                    })
                    pokemonsApi = [{
                        name: responseApi.name,
                        image: responseApi.sprites.other['official-artwork'].front_default,
                        types: typePokemon,
                        id: responseApi.id,
                    }]
                }
            }
            
            //if(responseApi.length < 0)
            const responseDb = await Pokemon.findAll({
                include: [{
                    model: Type,
                    attributes: {
                        exclude: ['id_type']
                    },
                    through: {
                        attributes: []
                    },
                }],
                where: {
                    name: { [Op.substring]: name.toLocaleLowerCase() },
                },
                attributes: {
                    exclude: ['hp', 'attack', 'defense', 'speed', 'height', 'weight'],
                }
            })

            responseDb.forEach(element => {
                let types = [];
                for (let i = 0; i < element.types.length; i++) {
                    types.push(element.types[i].name)
                }

                pokemonsDb = [...pokemonsDb, {
                    name: element.name,
                    image: element.image,
                    id: element.id_pokemon,
                    types: types,
                }]
            })
            
            fullResponse = [...pokemonsApi, ...pokemonsDb]
            //res.send(fullResponse)
            //return pokemonsDb.length > 0 ? res.send(pokemonsDb) : res.send('¡Pokemon not found')
            //return pokemonsApi.length > 0 ? res.send(pokemonsApi) : res.send('¡Pokemon not found')
            return fullResponse.length > 0 ? res.send(fullResponse) : res.send(['¡There is not pokemon with the searched name!'])
        }


    } catch (error) {
        res.send(error + '------------------------------')

    }
})

router.get('/:id_pokemon', async function (req, res) {
    const { id_pokemon } = req.params;
    // console.log(id_pokemon)

    var fullPokemonid = [];

    try {
        if (isNaN(id_pokemon)) {
            const responseDb = await Pokemon.findAll({
                include: [{
                    model: Type,
                    attributes: {
                        exclude: ['id_type']
                    },
                    through: {
                        attributes: []
                    },
                }],
            })

            responseDb.forEach(element => {
                let types = [];
                for (let i = 0; i < element.types.length; i++) {
                    types.push(element.types[i].name)
                }

                fullPokemonid = [{
                    name: element.name,
                    image: element.image,
                    id: element.id_pokemon,
                    height: element.height,
                    weight: element.weight,
                    hp: element.hp,
                    attack: element.attack,
                    defense: element.defense,
                    speed: element.speed,
                    types: types,
                }]
            })

            return fullPokemonid.length > 0 ? res.send(fullPokemonid) : res.send('¡Pokemon not found!')
        } else {
            const responseApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)).data;
            // console.log(responseApi)
            if (responseApi === NaN) {
                res.send('¡Pokemon not found!')
            } else {

                let typePokemon = [];
                responseApi.types.forEach(e => {
                    typePokemon = [...typePokemon, e.type.name];
                })

                fullPokemonid = [{
                    name: responseApi.name,
                    id: responseApi.id,
                    weight: responseApi.weight,
                    height: responseApi.height,
                    hp: responseApi.stats[0].base_stat,
                    attack: responseApi.stats[1].base_stat,
                    defense: responseApi.stats[2].base_stat,
                    speed: responseApi.stats[5].base_stat,
                    image: responseApi.sprites.other['official-artwork'].front_default,
                    types: typePokemon
                }];

                return fullPokemonid.length > 0 ? res.send(fullPokemonid) : res.send('¡Pokemon not found!')
            }
        }

    } catch (error) {
        res.send(error);

    }
})

module.exports = router;