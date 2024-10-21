//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");
const { type } = require('express/lib/response');

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/defuse", (req, res) =>{
    //Filtramos las defuse
    let defuseCartas = cartas.filter(carta => carta.name == "Defuse");
    //Comprobamos si hay cartas de tipo defuse y obtenemos la imagen
    let imagenURL = defuseCartas.length > 0 ? defuseCartas[0].image : null;

    //mostramos el json de las cartas defuse y embebemos la imagen
    res.send({
        defuseCartas,
        imagen : imagenURL ? `<img src="${imagenURL}"/>` : "No hay cartas disponibles de defuse"
    })


});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
