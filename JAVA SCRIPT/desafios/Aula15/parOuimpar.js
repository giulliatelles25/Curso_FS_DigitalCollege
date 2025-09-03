//Faça um algoritmo que leia um número e informe se ele é par ou ímpar.
let numero = parseInt(prompt('Digite um número: '))

//verifica se é par ou impar
if(numero % 2 === 0){
  console.log(numero + " é um número PAR.");
}
 else if (numero % 2 === 1){
  console.log(numero + " é um número ÍMPAR.");
}
else{
   alert('Você digitou uma palavra e não um número')

}

