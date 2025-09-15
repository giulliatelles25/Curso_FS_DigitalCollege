//Escreva um loop while que 
// exiba os números de 0 ao número passado pelo usuário (utilize prompt)

let num = 0 //primeiro valor da contagem
let limite  = Number(prompt('Digite um número:'))

while(num <= limite){
    //executar a atividade que será repetida durante o loop
    // enquanto a condição for verdadeira(true)
    console.log(num)
    //atualizar a condicao, para que o loop seja finito
    //num ++
    num += 1
}
