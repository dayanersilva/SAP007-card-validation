

const validator = {

  isValid(numeroCartao) {

    let arrayreverso = []
    for (let i = numeroCartao.length - 1; i >= 0; i--) {
      const numero = Number(numeroCartao[i])
      arrayreverso.push(numero)
    }

    let soma = 0

    for (let i = 0; i < arrayreverso.length; i++) {
      if (i % 2 != 0) {
        arrayreverso[i] *= 2

        if (arrayreverso[i] > 9) {
          arrayreverso[i] -= 9
        }
      }
      soma += arrayreverso[i]
    }

    if (soma % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify(numeroCartao) {
    let digit_mask = Array.from(numeroCartao)
    for (let index = 0; index < digit_mask.length - 4; index++) {
      digit_mask[index] = "#"
    }
    let join = digit_mask.join("")

    return join
  }

}
export default validator;
