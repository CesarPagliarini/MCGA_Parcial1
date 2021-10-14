const express = require('express');

const clientes = require('./clientes')

const recepcionista =require('./recepcionista');
const cabañas = require('./cabañas')

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabañas);

module.exports = router