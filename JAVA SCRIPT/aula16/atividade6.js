/*Escreva um programa que receba como entrada o valor do saque realizado pelo cliente
de um banco e retorne quantas notas de cada valor serão necessárias para atender ao
saque com a menor quantidade de notas possível. Serão utilizadas notas de 100, 50, 20,
10, 5, 2 e 1 real.*/


//dica use o loop while e dentro do corpo dele estabeleça as condições para avaliar a nota que será incluida no saque
// a cada nota adicionada, o valor do saque deverá ser diminuido pela nota adicionada

let saque = parseInt(prompt("Digite o valor que deseja sacar:"))
let n100 = 0
let n50 = 0
let n20= 0
let n10= 0
let n5 = 0
let n2 = 0
let n1 = 0

while (saque > 0) {
if (saque >= 100) {
    saque -= 100;
    n100++;
  } 
else if (saque >= 50) {
    saque -= 50;
    n50++;
  }
else if (saque >= 20) {
    saque -= 20;
    n20++;
  } 
else if (saque >= 10) {
    saque -= 10;
    n10++;
  } 
else if (saque >= 5) {
    saque -= 5;
    n5++;
  } 
else if (saque >= 2) {
    saque -= 2;
    n2++;
  } 
else {
    saque -= 1;
    n1++;
  }
}

console.log(n100 + " nota(s) de R$ 100");
console.log(n50 + " nota(s) de R$ 50");
console.log(n20 + " nota(s) de R$ 20");
console.log(n10 + " nota(s) de R$ 10");
console.log(n5 + " nota(s) de R$ 5");
console.log(n2 + " nota(s) de R$ 2");
console.log(n1 + " nota(s) de R$ 1");


