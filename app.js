// Requires importación de librerias
var express = require('express');
var mongoose = require('mongoose');
// Inicializar variables
var app = express();

//Conexion base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response) => {
    if (error) {
        throw error;
    }
    console.log('Te has conectado a la base de datos hospitalDB: \x1b[32m%s\x1b[0m', 'online');
});



// Rutas
app.get('/', (request, response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});


// Escuchar peticiones
app.listen(3000, () => {
        console.log('Express server en el puerto 3000: \x1b[32m%s\x1b[0m', 'online');
    }) // puerto