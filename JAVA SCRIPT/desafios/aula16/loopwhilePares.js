//Escreva um loop while que exiba todos os números pares de 0 a 10 no console.
let num=0;
    while(num<=10){
                  console.log(num)
                  num+=2 // incrementando de dois em dois para garantir apenas os pares
              }

              // ou 

              num = 0 // atualizando o valor
              
              while(num<=10){
                if (num%2==0){
                  console.log(num)
                  // imprimi o número apenas se o resto da divisão por dois for 0 (par)
                }                
                num+=1 // incrementando de um em um normalmente
              }

              