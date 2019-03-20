'use strict'
const fs = require("fs")
const express = require("express")
const app = express();
const morgan = require("morgan")
const { cursosEducacionContinua, printCursos } = require("./cursos")


const opciones = {
    id: {
        demand: true,
        alias: "i"
    },
    nombre: {
        demand: true,
        alias: "n"
    },
    cedula: {
        demand: true,
        alias: "c"
    }
}

const argv = require("yargs")
    .command("inscribirme", "Inscribirme en un curso", opciones)
    .argv



function prematricular(argv, handler) {
    if (argv.id && argv.nombre && argv.cedula) {
        var cursoPre = null;
        cursosEducacionContinua.find(curso => {
            if (curso._id == argv.id) {
                cursoPre = curso
            }
        });
        if (cursoPre != null) {
            const response =
                'El estudiante ' + argv.n +
                '\nSe ha prematriculado en el curso ' + cursoPre.nombre +
                '\nCon una duracion de ' + cursoPre.duracion +
                '\nY un valor de ' + cursoPre.valor
            handler(response)
        }
        else {
            console.log("\n Señor " + argv.nombre + " El curso que esta intentando prematricular no existe\n");
        }

    } else {
        console.log("\nListado de cursos");
        const response = { "Estos son los curso disponibles ": cursosEducacionContinua }
        handler(response)
    }
}

app.use(morgan("dev"))

app.get("/", (req, res) => {
    prematricular(argv, (response) => {
        res.send(response)
    })
})

app.listen(3000)
