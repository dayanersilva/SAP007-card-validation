

const validator = {

  isValid(numeroCartao) {

    let arrayreverso = [] // objeto vazio 
    for(let i = numeroCartao.length - 1; i >= 0; i--){ // loop ao contrário que pega da direita p esquerda
        const numero = Number(numeroCartao[i]) // variavel que recebe o valor do for e trasnforma em numero
        arrayreverso.push(numero) // aqui eu o valor em numero e puxo p o array reverso
    }

    let soma = 0

    for (let i = 0; i < arrayreverso.length; i++) { // novo loop que percorre o array invertido
      if (i % 2 != 0) { // se o numero for impar 
         arrayreverso[i] *= 2 // multiplica por 2

        if (arrayreverso[i] > 9) { // aqui compara se o numero multiplicado foi maior que 9
          arrayreverso[i] -= 9 // se for maior que 9 ele subtrai 9
          soma += arrayreverso[i] // aqui soma
        } else {
          soma += arrayreverso[i] // se o numero nao for par ele vai somando na variavel soma junto com os impares que fizeram todo o processo do if
        }
      } else {
        soma += arrayreverso[i]
      }

    }

    if (soma % 10 === 0) { // aqui ele vez se o numero e divisivel por 10
      return arrayreverso = true
    } else {
      return arrayreverso = false
    }
  }
  
 ,maskify(numeroCartao) {
    let digit_mask = Array.from(numeroCartao) // trasforma o valor do input em array 
    for (let index = 0; index < digit_mask.length - 4; index++) { 
      digit_mask[index] = "#" // loop onde os ultimos 4 caracteres nao seram mudados para #
    }
    let join = digit_mask.join("") // join junta tudo em uma unica string

    return join
  }

}

export default validator;
