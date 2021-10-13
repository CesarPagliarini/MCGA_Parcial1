const express = require('express');

const clientes = require('./clientes');

const recepcionista =require('./recepcionista');

const router = express.Router();

router.use('/clientes', clientes);

router.use('/recepcionista',recepcionista);


module.exports = router