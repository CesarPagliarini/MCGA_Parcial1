const express = require('express')

const clientes = require('./clientes')

const router = express.Router();

router.use('/clientes', clientes);


module.exports = router