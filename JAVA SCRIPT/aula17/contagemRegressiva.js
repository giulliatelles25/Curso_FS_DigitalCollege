//faça uma contagem regressiva do numero passado 
//pelo usuario até 0

let inicio = 
parseInt(prompt("Digite um número:"))

for(let i = inicio; i>=0; i--){
    console.log(`numero ${i} `)
}

console.log (`Sai do for`);