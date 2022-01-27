
import validator from './validator.js';

console.log(validator);

let val = document.getElementById('validarCartao');
val.addEventListener('click', clicar)

function clicar() {
    let numCard = document.getElementById('numcartao');
    let creditCardNumber = Number(numCard.value);
    
};
