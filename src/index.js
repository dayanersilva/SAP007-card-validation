
import validator from './validator.js';

const validar = document.getElementById('validar')
let msg = document.getElementById('msg')

function validarCartao() {
    let numeroCartao = document.getElementById('numcartao').value
    let numeroevalido = validator.isValid(numeroCartao)
    let mascNum = validator.maskify(numeroCartao)

    if(numeroCartao == ""){
        alert ('Digite o número')
        return
    }
    
    if(numeroevalido){

        msg.textContent = mascNum + " Cartão Válido " 
        
    }else{

        msg.textContent = mascNum + " Cartão não é válido " 
        
    }
    document.getElementById("numcartao").value = ""
 
}
validar.addEventListener('click', validarCartao)

