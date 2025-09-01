

//Leia o salário de um funcionário e exiba o novo salário deste funcionário com um aumento de 20%
let salario = prompt('Digite seu salário:')
salario = parseFloat(salario) //converter string para decimal

//calcular o aumento
//salario *= 1.2
// ou
let salarioAtual = salario + (salario * 0.02)
//ou
// salario += salario*0.2
alert ('O salário sem aumento é:' + salario + ' Com aumento ficou: ' + salarioAtual)



