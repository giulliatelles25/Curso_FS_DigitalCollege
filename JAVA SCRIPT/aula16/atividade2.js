//peça 2 números ao usuário
// o primeiro número será o iterador o segundo número será o limite do intervalo 
// intervalo de n1 a n2
// mostre no console todos números do intervalo  e 
// contabilize quantos números existem no intervalo passado pelo usuário 
// essa contabilização será armazenada na estrutura acumulador (não precisa ser exatamente esse nome :D

let iteradorControlador = Number(prompt('Digite o primeiro número:')) //10
let limite = Number(prompt('Digite o segundo número:')) //14

let acumulador = 0


while(iteradorControlador <= limite){
    //executar a atividade que será repetida durante o loop
    // enquanto a condição for verdadeira(true)
    console.log(iteradorControlador)
    //atualizar a condicao, para que o loop seja finito
    //num ++
    //iteradorControlador += 1
    iteradorControlador++
    //acumulador += 1
    acumulador++
}

console.log('Existem no console um intervalo de:'+ acumulador + ' números')