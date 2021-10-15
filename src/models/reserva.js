const mongoose = require('mongoose');


const reservaSchema = new mongoose.Schema({
    nroReserva: {
        type: Number,
        require: [true, 'Por favor, ingrese el numero de la reserva'],
    },
    fechaInicio:{
        type: Date,
        require: [true, 'Por favor, ingrese la fecha de inicio'],
    },
    fechaFin:{
        type: Date,
        required: [true, 'Por favor, ingrese la fecha de fin'],
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clientes',
    },
    cabaña: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cabañas',
    },
    recepcionista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recepcionista',
    },
});

module.exports = mongoose.model('reservas', reservaSchema);
