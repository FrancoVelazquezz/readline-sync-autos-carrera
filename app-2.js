let readlineSinc = require('readline-sync')
let contador = 0;

let calcular = (x, y) => {
    contador = x * y;
    console.log('Resultado: '+ contador)
}

let x = readlineSinc.questionInt('Ingrese base: ')

let y = readlineSinc.questionInt('Ingrese un altura: ')

calcular(x,y);