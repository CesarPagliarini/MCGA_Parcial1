const express = require('express');

const clientes = require('./clientes')
const recepcionista =require('./recepcionista');
const cabañas = require('./cabanas')
const reservas = require('./reserva')
const router = express.Router();

router.use('/clientes', clientes);
router.use('/cabanas', cabañas);
router.use('/reservas', reservas);
router.use('/recepcionistas', recepcionista);


module.exports = router