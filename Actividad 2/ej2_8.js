//Ahora vamos a comentar la funcion barajar
//de nuestro juego tal que asi

const cartas = require("./cartas (1).json");

let cartasBarajadas = [];

function barajar() {
    while (cartasBarajadas.length < cartas.length) {
        //Vamos a crear un numero aleatorio de tal a tal
        let aleatorio = Math.floor(Math.random() * cartas.length);
        
        //Y ahora con la variable anterior vamos a seleccionar una carta aleatoria
        let cartaRAM = cartas[aleatorio];

        //Aqui urilizo un filtro para saber las cartas que ya estan en la baraja
        let repe = cartasBarajadas.filter(carta => carta.id == cartaRAM.id);

        //Condicional en el que añado las cartas a la baraja
        if (repe.length == 0) {
            cartasBarajadas.push(cartaRAM);
        }
    }
    //Esto es para que la funcion me devuelva las cartas barajadas
    return cartasBarajadas
}

console.log(barajar());

console.log(barajar().length);