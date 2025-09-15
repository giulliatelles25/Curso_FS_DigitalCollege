//com o loop while, peça um número ao usuário e monte a tabuada desse número e mostre no console.

//ex.: num 2

/* 
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x 10 = 20
*/

let num = parseInt(prompt('Digite um número:'))

let i = 1; //incremento 1x'2'<- o nº 2 seria o 'i'

while(i <= 10){
console.log(num + "x" + i + "=" + num*i)
i++;

}