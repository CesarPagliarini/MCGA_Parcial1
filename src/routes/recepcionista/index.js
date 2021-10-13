const express = require('express');
const controller=require('../../controllers/recepcionista');

const router =express.Router();

router.route('/').get(controller.getRecepcionista);


module.exports = router
