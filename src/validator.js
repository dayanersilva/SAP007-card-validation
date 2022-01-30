

const validator = {

  isValid(numeroCartao) {

    let arrayNumero = [] // variavel de array vazia 

    for (let i = 0; i < numeroCartao.length; i++) { // loop pela variavel que tem o valor do numero do cartao
      const numero = Number(numeroCartao[i]) //aqui criei uma varivavel que recebe o numero que estao sendo percorridos loop e trasfomando em numero
      arrayNumero.push(numero) // aqui eu puxo os numeros da const numero e coloco na variavel de array vazia que criei antes
    }

    let arrayreverso = arrayNumero.reverse() // aqui reverto o array feito no for 
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
    let digit_mask = Array.from(numeroCartao)
    for (let index = 0; index < digit_mask.length - 4; index++) {
      digit_mask[index] = "#"
    }
    let join = digit_mask.join("")

    return join
  }

}

export default validator;
