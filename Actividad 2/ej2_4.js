//Convierto el onjeto creado a JSON utilizando el metodo JSON
//.stringfy

let estudiante = {
    nombre : "Juan",
    edad : 10,
    curso : "matematicas",
    notas : [10,10,10]
}

let estudianteSt = JSON.stringify(estudiante);

console.log(estudianteSt);