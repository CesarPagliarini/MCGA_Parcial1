const express = require('express');     
const router = require('./routes');     
const mongoose = require('mongoose');


//const port = 3000
const port = process.env.PORT || 3000;

const app = express()

app.use(express.json());            // Permite obtener el cuerpo del POST via req.body
app.use('/', router);

app.listen(port, () => {
    console.log(`Server corriendo en puerto: ${port}`)
})

mongoose.connect('mongodb+srv://parcialmcga:mcga123@cluster0.4qowy.mongodb.net/dbparcial?retryWrites=true&w=majority').then((result) => {
    console.log('Conexion exitosa con la base de datos')
}).catch((error) => {
    console.log(`Error en la conexion, error:  ${error}`)
})

