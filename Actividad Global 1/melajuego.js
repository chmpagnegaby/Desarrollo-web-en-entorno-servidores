//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/melajuego", (req, res) =>{
    let aleatorio = Math.floor(Math.random() * cartas.length);
    let cartaRAM = cartas[aleatorio];
    if (cartaRAM.type == "Exploding") {
        res.send("Has perdido")
    } else {
        res.send("No te ha tocado un exploding")
    }
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
