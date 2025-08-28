let numero = 10;

// peça um número ao usuário e atribua a soma à variável numero
let numeroUsuario = Number(prompt("Digite um número:"));
numero += numeroUsuario;
console.log ("O número inserido pelo usuário foi" + numeroUsuario)
console.log("Após soma: " + numero);

// faça a divisão por 2 e reatribua à variável numero
numero/= 2;
console.log("Após divisão por 2: " + numero);

// faça a multiplicação por 5 e reatribua à variável numero
numero*= 5;
console.log("Após multiplicação por 5: " + numero);

// subtraia 2 e reatribua à variável numero
numero-= 2;
console.log("Após subtração de 2: " + numero);