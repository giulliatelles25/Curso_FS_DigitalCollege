//Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)


let ladoQuadrado = prompt('Digite o valor do lado do quadrado')
ladoQuadrado = Number(ladoQuadrado) //convertendo para número
console.log('O valor digitado é: ' + ladoQuadrado)
//let areaQuadrado=ladoQuadrado*ladoQuadrado
let areaQuadrado= ladoQuadrado **2 //elevando na potência 2
alert('O valor da área do quadrado é: ' + areaQuadrado)
console.log('O valor da área do quadrado é: ' +areaQuadrado)