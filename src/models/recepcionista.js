const mongoose = require('mongoose');

const recepcionistaEsquema = new mongoose.Schema({
    usuario: String,
    contraseña: String,
    nombre:String,
    apellido:String,
})

module.exports=mongoose.model('Recepcionista',recepcionistaEsquema);