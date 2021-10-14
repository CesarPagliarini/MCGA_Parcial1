const mongoose = require('mongoose');


const reservaSchema = new mongoose.Schema({
    nroReserva: Number,
    fechaInicio: Date,
    fechaFin: Date,
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clientes',
    },
    cabaña: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cabañas',
    },
    recepcionista: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recepcionista',
    },
});

module.exports = mongoose.model('Reserva', reservaSchema);