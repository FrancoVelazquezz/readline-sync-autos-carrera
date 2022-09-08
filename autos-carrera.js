const { stringify } = require('querystring')
let readlineSinc = require('readline-sync')

let primerVuelta = readlineSinc.questionInt('Ingrese el timepo de la 1er vuelta: ')
let segundaVuelta = readlineSinc.questionInt('Ingrese el timepo de la 2da vuelta: ')
let tercerVuelta = readlineSinc.questionInt('Ingrese el timepo de la 3ra vuelta: ')
let cuartaVuelta = readlineSinc.questionInt('Ingrese el timepo de la 4ta vuelta: ')

const calcularVueltas = () => {
    let total = primerVuelta + segundaVuelta + tercerVuelta + cuartaVuelta
    let promedio = total / 4

    console.log('Tiempo total: ' + total)
    console.log('Promedio de vueltas: ' + promedio)
}

calcularVueltas()
