
import validator from './validator.js';

console.log(validator);

const val = document.getElementById('validarCartao');
val.addEventListener('click', clicar)

function clicar() {
    let numCard = document.getElementById('numcartao');
    let creditCardNumber = numCard.value;
    validator.isvalid(creditCardNumber);
}
