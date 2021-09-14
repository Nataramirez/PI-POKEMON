const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRoute = require('./pokemonsPost&Get')
const typesGet = require('./typesGet')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonsRoute)
router.use('/types', typesGet)


module.exports = router;
