//Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas

// Pergunta ao usuário quantos alunos haverá
let qtdNotas = parseInt(prompt("Digite a quantidade de notas a serem lidas para cálculo das médias:"));

let somaNotas = 0; // Acumulador: soma das notas

for (let i = 1; i <= qtdNotas ; i++) {
  somaNotas+= parseFloat(prompt(`Digite a nota do aluno ${i}`));

}

// Calcula a média
let media = somaNotas / qtdNotas;

// Mostra a média
console.log(`A média das notas é: ${media.toFixed(2)}`);