//em uma empresa existem 4 departamentos:
// camaEmesa -> 10 (ramal do departamento)
// moveis -> 25 (ramal do departamento)
//  eletronicos -> 36 (ramal do departamento)
// moda -> 42 (ramal do departamento)

//enquanto o usuario nao digitar um ramal valido, devera ser 
//repetido o pedido com as informações sobre o número dos ramais validos

// quando o usuario acertar, deverá ser encaminhado para um 'auto-atendimento'
// que contemplará os 4 casos possíveis (sem opção de default)

//while

//switch case: cada caso mostrará um email para contato
// ex: eletronicos@cleitinhomagazine.com.br

let ramal;

while (true){
ramal = parseInt(prompt(
    "Digite um ramal: \n" +
    "10 - Cama e mesa \n" +
    "25 - Moveis \n" +
    "36 - Eletronicos \n"+
    "42 - Moda \n"
));

switch(ramal){
    case 10: 
    alert("Contato camaEmesa: camaemesa@gimagazine.com.br")
    break;

    case 25:
    alert("Contato moveis: moveis@gimagazine.com.br")
    break;

    case 36:
    alert("Contato eletronicos: eletronicos@gimagazine.com.br")
    break;

    case 42:
    alert("Contato Moda: moda@gimagazine.com.br")
    break;

    default: 
    alert("Ramal inválido! Tente novamente.");
    continue;// volta para o inicio do while
    }
    break;//só chega aqui se foi um ramal válido 
}
