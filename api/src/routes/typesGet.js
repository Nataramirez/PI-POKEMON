const { Type } = require('../db');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
     
        const types = (await axios.get('https://pokeapi.co/api/v2/type')).data.results
        //console.log(types.data.results)
       
       const dbTypes = await Promise.all(
           types.map(e => Type.findOrCreate({
               where: {
                   name: e.name
               }
           }))
       )
        res.json(dbTypes)

        
    } catch (error) {
        res.send(error)
        
    }
})


module.exports = router;