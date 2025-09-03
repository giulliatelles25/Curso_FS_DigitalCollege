//Leia dois números e informe o maior deles.

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite o segundo número: '))

if(n1 > n2){
     console.log("O primeiro número é maior que o segundo.");
}
else if(n1 < n2){
    console.log("O primeiro número é menor que o segundo.");
}
else {
    console.log("O primeiro número é igual que o segundo")
}
