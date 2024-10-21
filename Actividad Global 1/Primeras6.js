//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/primeras6", (req, res) =>{
    
    let cartasPrimeraRonda = [];
    let sinDesuseFiltro = cartas.filter(carta => carta.name != "Defuse" );

    while (cartasPrimeraRonda < 5) {

        let aleatorio = Math.floor(Math.random() * sinDesuseFiltro.length);
        let cartaSinDefuse = sinDesuseFiltro[aleatorio];

        if (!cartasPrimeraRonda.some(carta => carta.id == cartaSinDefuse.id)) {
            cartasBarajadas.push(cartaSinDefuse);
        }
    }

    let DefuseCarta = cartas.find(carta => carta.name == "Defuse")
    cartasPrimeraRonda = push(DefuseCarta);

    res.send(cartasPrimeraRonda);
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
