//Despues de convertit el objeto a JSON, lo vuelvo a reconvertit a su estado inicial

let estudiante = {
    nombre : "Juan",
    edad : 10,
    curso : "matematicas",
    notas : [10,10,10]
}

let estudianteSt = JSON.stringify(estudiante);

let vueltaDeNuevo = JSON.parse(estudianteSt);

console.log(vueltaDeNuevo);