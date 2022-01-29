

const validator = {

  isValid(numeroCartao) {

    //condição se caso o input estiver vazio, null ou tiver menos que 16 numeros irá dar um alerta
    if (numeroCartao == "" || numeroCartao == null || numeroCartao.length < 16) {
      alert (" Digite apenas os números do cartão")
    }
    
    let soma = 0

    for (let i = numeroCartao.length - 1; i >= 0; i--) { //loop invertido

      if (i % 2 != 0) {
        numeroCartao[i] = Number(numeroCartao[i]) * 2
        if (numeroCartao[i] > 9) {
          numeroCartao[i] = numeroCartao[i] - 9
          soma = soma + Number(numeroCartao[i])
        } else {
          soma = soma + numeroCartao[i]
        }
      } else{
        soma = soma + Number(numeroCartao[i])
      }
    }
    
    if (soma % 10 === 0) {
      return numeroCartao = true
    } else {
      return numeroCartao = false
    }
  }


  , maskify(numeroCartao) {
    let digit_mask = Array.from(numeroCartao)
    for (let index = 0; index < digit_mask.length - 4; index++) {
      digit_mask[index] = "#"
    }
    let join = digit_mask.join("")

    return join
  }

}

export default validator;
