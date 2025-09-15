//Faça um programa que some todos os números naturais abaixo de 1000
//que são múltiplos de 3 ou 5


let soma = 0; //acumulador

for(i=10 ; i >= 0; i--) {
  
    if(i % 3 == 0 || i % 5 == 0){
    soma += i;
    console.log(i)
  }
    console.log("A soma de todos os múltiplos de 3 ou 5 abaixo de 1000 é:", soma);
}


