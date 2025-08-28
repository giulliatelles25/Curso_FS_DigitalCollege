// para operados + para soma(numeros) e concatenação de strings
// - para subtração (numeros)
// * para multiplicação (numeros)
// / para divisão (numeros) 

let numero = 10
let numTexto = '10'
let palavra = 'coisa'

console.log(numero + numTexto) //concatenação
console.log(numTexto + palavra) //concatenação
console.log (numero +2 ) // operador aritmético soma

//Transformação de string para numero
let numeroString = '50'
//converter para number
let numeroConvertido = Number(numeroString)
let numeroUsuario = Number(prompt('Digite um número'))

//console.log(Number('Cleitinho')) //palavras que nao sao numeros sao convertidas para NaN (Not a number)


let resto = 10 % 3

let potencia = 10 ** 3