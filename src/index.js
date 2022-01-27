
import validator from './validator.js';

console.log(validator);

const val = document.getElementById('validarCartao');
val.addEventListener('click', clicar)

function clicar() {
    const numCard = document.getElementById('numcartao');
    const creditCardNumber = parseInt(numCard.value);
    validator.isValid(creditCardNumber);
}
