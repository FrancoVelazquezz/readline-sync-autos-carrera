const { stringify } = require('querystring')
let readlineSinc = require('readline-sync')

let x = readlineSinc.questionInt('Ingrese un primer numero: ')

let y = readlineSinc.questionInt('Ingrese un segundo numero: ')

let accion = readlineSinc.questionInt('1 = sumar | 2 = restar | 3 = multiplicar | 4 = Dividir ')

let calculadora = () => {
    switch (accion) {
        case 1:
            let suma = x + y;
            console.log('Resultado: ' + suma)
            break;
        case 2:
            let resta = x - y;
            console.log('Resultado: ' + resta)
            break;
        case 3:
            let multiplicacion = x * y;
            console.log('Resultado: ' + multiplicacion)
            break;
        case 4:
            let dividir = x / y;
            console.log('Resultado: ' + dividir)
            break;
        default:
            console.log('No ingreso un numero')
            break;
    }
}

calculadora();

