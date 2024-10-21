//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/primeras6", (req, res) =>{
    let cartasPrimeraRonda = [];
    while (cartasPrimeraRonda.length < 6) {

        let aleatorio = Math.floor(Math.random() * cartas.length);
        let cartaRAM = cartas[aleatorio];
        let repe = cartasPrimeraRonda.some(carta => carta.id == cartaRAM.id);

        if (!repe) {
            cartasPrimeraRonda.push(cartaRAM);
        }
    }

    res.send(cartasPrimeraRonda)
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
