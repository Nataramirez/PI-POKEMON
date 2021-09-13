const { Pokemon } = require('../db');
const express = require('express');
const router = express.Router();

router.post('/', async function(req, res) {
    const { name, hp, attack, defense, speed, height, weight, image, type } = req.body;
    try {
        const newPokemon = await Pokemon.create({
            name, 
            hp, 
            attack, 
            defense, 
            speed,
            height,
            weight,
            image = image ? image : 'acá va la imagen',
        });
        type.forEach(async e => {
            await newPokemon.addType(e)
        });
        return res.json(newPokemon);
        
    } catch (error) {
        res.send(error)
        
    }
})

module.exports = router;