const express = require('express')

const clientes = require('./clientes')
const cabañas = require('./cabañas')

const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabañas', cabañas);

module.exports = router