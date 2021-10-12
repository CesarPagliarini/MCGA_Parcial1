const express = require('express');
const ctrlClientes = require('../../controllers/clientes');
const router = express.Router();

router.get('/', ctrlClientes.getClientes);
router.post('/', ctrlClientes.addCliente)


module.exports = router