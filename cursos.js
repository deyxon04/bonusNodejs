'use strict'

const cursosEducacionContinua = [
    {
        _id: 1,
        nombre: 'Introduccion a los sistemas de informacion',
        duracion: "1 Semestre",
        valor: 100000,
    }, {
        _id: 2,
        nombre: 'Formacion Integeal',
        duracion: "2 Meses",
        valor: 50000,
    }, {
        _id: 3,
        nombre: 'Introduccion a Django',
        duracion: "1 Mes",
        valor: 0,
    }, {
        _id: 4,
        nombre: 'Programamcion basica',
        duracion: "2 Semanas",
        valor: 200000,
    }
]

function printCursos(cursosEducacionContinua) {
    var intervalo = 0
    for (let i = 0; i < cursosEducacionContinua.length; i++) {
        setTimeout(function () {
            console.log("\nCurso ", i + 1);
            console.log("Nombre del curso: " + cursosEducacionContinua[i].nombre);
            console.log("ID del curso: " + cursosEducacionContinua[i]._id);
            console.log("Ducacion del curso: " + cursosEducacionContinua[i].duracion);
            console.log("Valor del curso: " + cursosEducacionContinua[i].valor + "\n");
        }, intervalo)
        intervalo = intervalo + 2000
    }
}

module.exports = {printCursos,cursosEducacionContinua}