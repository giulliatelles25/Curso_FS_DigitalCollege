//Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a 
// loja B (faturamento = 54000). Se o faturamento atingir
//  esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.

let faturamento = 0; //acumulador

for (let i=1; i<=5; i++){
    let valorCompra = parseFloat(prompt(`Digite o valor da compra do cliente ${i} comprou:`))
    faturamento += valorCompra; //soma todos os faturamentos
}

// Faturamento da loja B
const faturamentoB = 54000;

// Verifica se o faturamento foi superior
if (faturamento > faturamentoB) {
  let diferenca = faturamento - faturamentoB;
  console.log(`Parabéns! O faturamento foi superior ao da loja B em R$ ${diferenca.toFixed(2)}.`);
  alert(`Parabéns! O faturamento foi superior ao da loja B em R$ ${diferenca.toFixed(2)}.`);

  
} else if (faturamento === faturamentoB) {
  console.log(`O faturamento igualou ao da loja B: R$ ${faturamento.toFixed(2)}.`);
  alert(`O faturamento igualou ao da loja B: R$ ${faturamento.toFixed(2)}.`);
} else {
  let faltou = faturamentoB - faturamento;
  console.log(`O faturamento ficou abaixo da loja B em R$ ${faltou.toFixed(2)}.`);
  alert(`O faturamento ficou abaixo da loja B em R$ ${faltou.toFixed(2)}.`);
}