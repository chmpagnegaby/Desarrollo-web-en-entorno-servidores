//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

const cartas = require("./cartas.json");
const { type } = require('express/lib/response');

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/melajuegodificil", (req, res) =>{
    //cogemos carta aleatoria
    let aleatorio = Math.floor(Math.random() * cartas.length);
    let cartaRAM = cartas[aleatorio];

    //condicional si sale explodding
    if (cartaRAM.type == "Exploding") {
        res.send("Has perdido, te cono un Exploding Kitten")
    }else {
        //si no  pues añadimos una al mazo
        let nuevaCartaBUM = {
            id: cartas.length,
            name : "Exploding Kitten",
            type : "Exploding",
            value : "show this card immediately",
            image : 'explodingKitten${cartas.length}.png' 
        }

        cartas.push(nuevaCartaBUM);

        //Y luego devolvemos un mensaje la carta, y la longitud de cuantas cartas hay
        res.send({
            mensaje : "No te toco un Exploding esta vez",
            nuevaCartaExploding : nuevaCartaBUM,
            totalCartas: cartas.length
        })
    }
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
