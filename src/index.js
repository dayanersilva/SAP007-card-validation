
import validator from './validator.js';

//console.log(validator.isValid(numeroCartao))


const validar = document.getElementById('validarCartao')
validar.addEventListener('click', clicar)

function clicar() {
    let numeroCartao = document.getElementById('numcartao').value

    if(numeroCartao === '') {
        alert ('Nenhum número foi digitado')
        return
    }

    let numeroevalido = validator.isValid(numeroCartao)
    
    if(numeroevalido === true){
       alert ('É válido')
    }else{
        alert ('Não é válido') 
    }

    validator.maskify(numeroCartao)

}
