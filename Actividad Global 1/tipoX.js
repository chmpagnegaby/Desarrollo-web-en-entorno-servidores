//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/tipoX", (req, res) =>{
    const nombre = req.body.nombre;
    let filtro = cartas.filter(carta => carta.name == nombre)
    if (filtro.length > 0) {
        res.send(filtro);
    } else {
        res.status(400).send("No hay ningún tipo de esa carta")
    }
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
