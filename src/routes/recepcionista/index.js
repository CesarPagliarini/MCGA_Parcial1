const express = require('express');
const controller=require('../../controllers/recepcionista');

const router =express.Router();

router.route('/').get(controller.getRecepcionista);

router.route('/:recepcionistaId').get(controller.getRecepcionistaById);

router.route('/').post(controller.addRecepcionista);

router.route('/:recepcionistaId').delete(controller.deleteRecepcionistaById);

router.route('/:recepcionistaId').put(controller.updateRecepcionistaById);


module.exports = router
