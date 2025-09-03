//utilize as condicionais para testar se um número é par ou impar
//peça esse número ao usuário
// % restou da divisão INTEIRA 21 módulo da divisão por 2 =1
// divisão completa 21 dividido por 2 = 10.5


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

// mostra também o resto e a divisão completa
console.log("Resto da divisão de " + numero + " por 2: " + (numero % 2));
console.log("Divisão completa de " + numero + " por 2: " + (numero / 2))


// utilize as condicionais para tratar o erro da palavra digitada pelo usuário.
//caso o texto digitado pelo usuário não seja par ou impar deve ser exibido um 
// alerta dizendo que ele digitou uma palavra e não um número