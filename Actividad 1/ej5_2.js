//Importar express
const express = require('express');

//Crear la aplicación express
const app = express();

//Ruta para la raiz (/)
app.get('/', (req, res) => {
    res.send("Hola express");
});

//Ruta para perro
app.get('/perro', (req, res) => {
    res.send('Hola perro');
});

//Ruta para gato
app.get('/gato', (req, res) => {
    res.send("Hola gato");
});

//Ruta para otra URL
app.get('*', (req, res) => {
    res.send('Hola animal');
});

//Configurar puerto
const puerto = 5000;
app.listen(puerto, () => {
    console.log('Servidor escuchando en http://localhost:${puerto}');
});

