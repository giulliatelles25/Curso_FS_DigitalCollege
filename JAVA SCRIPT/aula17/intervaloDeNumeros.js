//Faça um programa que receba dez números e usando 
// laços de repetição calcule mostre a quantidade de números entre 30 e 90.

let contador = 0; // Acumulador: vai contar quantos números estão entre 30 e 90

for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    console.log(`O ${i}º número digitado: ${numero}`); // Mostra imediatamente


  // Verifica se o número está entre 30 e 90 (inclusive)
  if (numero >= 30 && numero <= 90) {
    contador++; // Incrementa o contador
  }
}

// Mostra a quantidade de números que estão entre 30 e 90
console.log(`Quantidade de números entre 30 e 90: ${contador}`);