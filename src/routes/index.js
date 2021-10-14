const express = require('express')

const clientes = require('./clientes')
const cabañas = require('./cabanas')

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabañas);

module.exports = router