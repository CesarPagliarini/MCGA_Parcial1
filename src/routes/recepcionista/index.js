const express = require('express');
const controller=require('../../controllers/recepcionista');

const router =express.Router();

router.route('/').get(controller.getRecepcionista);
router.route('/').post(controller.addRecepcionista);


module.exports = router
