//Importamos express
const express = require('express');
//Creamos instancia de express
const app = express();

//Aqui he tenido algo mas de dificultad, por lo que tuve que preguntar a chat algunas cosas
//Utilizo fs para interactuar con el sistema de archivos
const fs = require('fs');
//Y path por que ofrece herramientas para trabajar con rutas de archivos 
const path = require('path');

const cartas = require("./cartas.json");
const { type } = require('express/lib/response');

//Utilizamos esto para manejar el body en formato JSON
app.use(express.json());

app.post("/defuse", (req, res) =>{
    //Cogemos los datos de la nueva carta
    const nuevaCartaBUM = req.body;

    //Validemos que esten todos los datos
    if (!nuevaCartaBUM.id || !nuevaCartaBUM.name || !nuevaCartaBUM.type || !nuevaCartaBUM.value || !nuevaCartaBUM.image) {
        return res.status(400).send("Todos los campos son obligatorios")
    }

    //Añadimos
    cartas.push(nuevaCartaBUM);

    //Actualizamos el JSON tal que asi
    //escribimos los datos utilizando path join con el que combinamos las partes de una ruta
    //con eldirname construimos una ruta completa al archivo json de cartas
    //el stringfy para convertir en cadena a cartas, con unos parametros para facilitar la legibidad
    //el err es una funcion de callback que se ejecuta despues de intentar eccribir en el archivo donde
    //metemos una condicional en el que si hay error lo expresamos, y si no lo hay enviamos una respuesta con mensae y la carta
    fs.writeFile(path.join(__dirname, 'cartas.json'), JSON.stringify(cartas, null, 2), (err) => {
        if(err){
            return res.status(500).send("Error al actualizar el JSON")
        }

        res.send({
            message : "Carta añadida corractemente",
            carta : nuevaCartaBomba
        });
    });
});

const puerto = 4000;

//Iniciar el servdor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
