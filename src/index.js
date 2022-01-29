
import validator from './validator.js';

//console.log(validator.isValid(numeroCartao))


const validar = document.getElementById('validarCartao')
validar.addEventListener('click', clicar)

function clicar() {
    let numeroCartao = document.getElementById('numcartao').value
    let numeroevalido = validator.isValid(numeroCartao)
    
    if(numeroevalido){
        alert ('É válido')
    }else{
        alert ('Não é válido') 
    }

    validator.maskify(numeroCartao)

}
