//Escreva um algoritmo que leia três valores. A, B, C.
//  E informe se a soma de A + B é maior que C.

let valorA = Number(prompt("Digite o valor A: "))
let valorB = Number(prompt("Digite o valor B: "))
let valorC = Number(prompt("Digite o valor C: "))

let resultado = valorA + valorB

//if( (A+B) > C) posso realizar a soma direto na condicional
if(resultado > valorC){
    alert('O resultado de A+B é maior que o valor C')
    console.log('O resultado de A+B é maior que o valor C')
    console.log(`A soma de A (${A}) e de B (${B} É MAIOR que C(${C}))`)
}
else if(resultado < valorC){
    alert('O resultado de A+B é menor que o valor de C')
    console.log('O resultado de A+B é menor que o valor de C')
    console.log(`A soma de A (${A}) e de B (${B} NÃO É MAIOR que C(${C}))`)
}
else{
    alert('O resultado de A+B é igual ao valor de C')
    console.log('O resultado de A+B é igual ao valor de C')
}

console.log('Valor de A:' + valorA)
console.log('Valor de B:' + valorB)
console.log('Valor de C:' + valorC)



