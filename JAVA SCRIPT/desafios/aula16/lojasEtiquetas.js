//Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, 
// informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

            let desconto = 0
            let cor = prompt('Digite a cor da etiqueta do produto: \n Verde - 10% \n Amarelo - 20% \n Azul - 30 % \n Vermelho 40% ')
            let valor = Number(prompt('Digite o valor do produto'))
            let novoPreco = 0

            //validação da cor da etiqueta

            while (cor!= 'Verde' && cor!= 'Amarelo' && cor!= 'Azul' && cor!= 'Vermelho' ) {
                 //caso a cor seja diferente de qualquer uma das opções teremos o 'true' para o teste lógico da condição do laço e ele será repetido

                 //caso a cor seja igual a uma das opções teremos o 'false' para o teste para o teste lógico e o laço será encerrado

                 cor = prompt('Você digitou uma cor inválida para as etiquetas. Digite a cor da etiqueta do produto: \n Verde \n Amarelo \n Azul  \n Vermelho ')
            }
            
            switch (corEtiqueta) {
                case 'Verde':
                    desconto = 0.1; // 10%
                    break;
                case 'Amarelo':
                    desconto = 0.2; // 20%
                    break
                case 'Azul':
                    desconto = 0.3; // 30%
                    break
                case 'Vermelho':
                    desconto = 0.4; // 40%
                    break
                default:
                    console.log('Cor de etiqueta inválida');
                    desconto= 0 // Retorna o preço sem desconto se a cor da etiqueta for inválida
            }
            
            novoPreco = valor * (1 - desconto)
            console.log(`O valor do produto com a etiqueta ${cor} teve o valor de R$ ${valor} ajustado para ${novoPreco} `) 
