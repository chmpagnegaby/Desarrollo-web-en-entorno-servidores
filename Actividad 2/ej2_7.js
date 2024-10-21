//Filtrar a los estudiantes mayores de 20  años y mostrarlos en la consola con el filter

let alumnos = [
    {
        nombre : "Juan",
        edad : 10,
        curso : "matematicas",
        notas : [10,10,10]
    },
    {
        nombre : "Juan",
        edad : 30,
        curso : "lengua",
        notas : [10,10,10]
    },
    {
        nombre : "Alvaro",
        edad : 40,
        curso : "educacion",
        notas : [10,10,10]
    }
]

let alumnosMde20 = alumnos.filter(alumno => alumno.edad > 20);

console.log(alumnosMde20);