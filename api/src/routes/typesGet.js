const { Type } = require('../db');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        let array = []
        const types = await axios.get('https://pokeapi.co/api/v2/type')
        //console.log(types.data.results)
        for(let i = 0; i < types.data.results.length; i++){
            const listTypes = await Type.create({
                name: types.data.results[i].name
            })
            array.push(listTypes)
        }
        res.json(array)

        
    } catch (error) {
        res.send(error)
        
    }
})


module.exports = router;