

const validator = {
  
  isValid : function (creditCardNumber){
    
    for (let i = creditCardNumber.length-1; i >= 0; i--) {
     let reverseNumber = parseInt(creditCardNumber.charAt(i));
    console.log(reverseNumber);
      
    }
   }

   
};


export default validator;


