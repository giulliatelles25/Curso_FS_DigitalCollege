//crie as variáveis e faça a atribuição de acordo com o que foi pedido:
// a variável nome deve receber o texto digitado pelo usuário e não pode ser modificada
//a variável filhos deve receber um booleano que diz se a pessoa tem filhos ou nao (true ou false) e poderá ser modificada mas não redeclarada
//a variável idade deve ser declarada com um valor de 0 e depois ser atualizada por reatribuição com o valor passado pelo usuário
//mostrar todas as informacoes no console, uma por uma

//prompt--> recebe a digitação do usuário
//confirm--> recebe a escolha do usuário ( true ou false)
//console.log--> mostra a mensagem no console do navegador
// A variável nome deve receber o texto digitado pelo usuário e não pode ser modificada
const nome = prompt("Digite seu nome:");
console.log("Nome: " + nome);
// A variável filhos deve receber um booleano (true ou false), pode ser modificada, mas não redeclarada
let filhos = confirm("Você tem filhos? (OK = Sim, Cancelar = Não)");
console.log("Tem filhos: " + filhos);
// A variável idade deve ser declarada com 0 e depois atualizada pelo valor passado pelo usuário
let idade = 0;
idade = Number(prompt("Digite sua idade:"));
console.log("Idade: " + idade);

console.log( "O usuário é, nome:" + nome + "Idade:"+ idade)



