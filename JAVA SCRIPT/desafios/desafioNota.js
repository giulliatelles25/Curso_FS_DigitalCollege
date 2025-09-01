//Leia três notas, calcule sua média e a exiba para o usuário
alert('Calcule sua média')
let nota1=prompt('Digite sua primeira nota:')
nota1 = parseFloat(nota1)//convertendo string para decimal
console.log(parseFloat(nota1)) //exibir no console
let nota2=prompt('Digita sua segunda nota:')
nota2 = parseFloat(nota2)//convertendo string para decimal
console.log(parseFloat(nota2)) //exibir no console
let nota3=prompt('Digite sua terceira nota:')
nota3 = parseFloat(nota3) //convertendo string para decimal
console.log(parseFloat(nota3)) //exibir no console

let media= (nota1 + nota2 + nota3)/3
media = parseFloat(media)
alert('A média é: ' + media.toFixed(2))
console.log('A média das notas é: '+ (media.toFixed(2)))









