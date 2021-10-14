const express = require('express');
const ctrlCabañas = require('../../controllers/cabaña');
const router = express.Router();

router.get('/', ctrlCabañas.getCabanas);
router.post('/', ctrlCabañas.addCabana);
router.get('/:id', ctrlCabañas.getCabanaById);
router.delete('/:id', ctrlCabañas.deleteCabanaById);
router.put('/:id', ctrlCabañas.updateCabanaById);

module.exports = router