
import validator from './validator.js';

//console.log(validator.isValid(numeroCartao))

const numcartao = document.getElementById('numcartao')
const validar = document.getElementById('validarCartao')
let msg = document.getElementById('msg')

numcartao.addEventListener('click', masknum )
validar.addEventListener('click', clicar)


function masknum(){
    
    let mask = document.getElementById('numcartao').value
    let maskNum = validator.maskify(mask)

    msg.textContent = maskNum
    
}


function clicar() {
    let numeroCartao = document.getElementById('numcartao').value
    let numeroevalido = validator.isValid(numeroCartao)
    
    if(numeroevalido === true){

        msg.textContent = "Cartão Válido" 
       //alert ('Cartão é válido')
    }else{

        msg.textContent = "Cartão não é válido"
        //alert ('Cartão não é válido') 
    }

    //validator.maskify(numeroCartao)

}
