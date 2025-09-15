//Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, e imprima o resultado desta operação.

let numero = Number(prompt('Digite um número:'))
alert(`O numero digitado é: ${numero}`) 

if(numero % 2 === 0){
    numero = numero+5
    alert(`O número é par e somado com 5 é: ${numero}`) 

}
else{
    numero = numero+8
     alert(`O número é ímpar e somado com 8 é: ${numero}`) 

}
