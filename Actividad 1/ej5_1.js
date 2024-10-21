//Importamos el modulo http

const http = require('http');

//Creamos el servidor

const server = http.createServer((req, res) => {
    //Configuramos la respuesta
    res.statusCode = 200;
    //Establecemos el tipo de contenido
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hola mundo"); //Respuesta

    });

    //Servidor escuchando en el puerto 3000
    server.listen(3000, '127.0.0.1', () =>{
        console.log("Servidor corriendo en el puerto 3000 en 127.0.0.1:3000/");
});