const express = require('express');
const ctrlReserva = require('../../controllers/reserva');


const router = express.Router();

router.route('/').get(ctrlReserva.getReservas);
router.route('/').post(ctrlReserva.addReserva);
router.route('/:id').put(ctrlReserva.updateReservaById);
router.route('/:id').get(ctrlReserva.getReservaById)
router.route('/:id').delete(ctrlReserva.deleteReservaById);


module.exports = router
