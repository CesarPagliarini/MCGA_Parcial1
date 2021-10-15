const express = require('express');

const clientes = require('./clientes')
const recepcionista =require('./recepcionista');
const cabañas = require('./cabanas')

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabañas);
router.use('/recepcionista', recepcionista);


module.exports = router