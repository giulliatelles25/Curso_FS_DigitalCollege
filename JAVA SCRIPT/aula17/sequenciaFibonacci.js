//Use um for para mostrar os primeiros 15 termos da sequencia fibonacci 
let termo1 = 0;
let termo2 = 1;

console.log("Os primeiros 15 termos da sequência de Fibonacci são:");

for (let i = 1; i <= 15; i++) {
  console.log(termo1); // mostra o termo atual

  let proximo = termo1 + termo2; // calcula o próximo termo
  termo1 = termo2; // avança o termo 1
  termo2 = proximo; // avança o termo 2
}