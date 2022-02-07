# Cartão de Crédito Válido


   **Introdução**
O algoritmo de Luhn, também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem ser multiplicados por dois; se esse número for maior ou igual a 10, devemos adicionar os dígitos do resultado; o número a verificar será válido se a soma de seus dígitos finais for um múltiplo de 10.

![alt text](https://camo.githubusercontent.com/a2f75e73d94d0c9c7475296b056bdf3219e13a52cd99368c67cdbcccc3af4573/68747470733a2f2f7777772e313031636f6d707574696e672e6e65742f77702f77702d636f6e74656e742f75706c6f6164732f4c75686e2d416c676f726974686d2e706e67)


   **Resumo do projeto**
Neste projeto, você precisará criar um aplicativo da Web que permita ao usuário validar o número de um cartão de crédito. Além disso, você precisará implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto os quatro últimos.

Inicialmente procurei identificar e definir um cenário para colocar o projeto do card.
Montei [A Card Validation](https://dayanersilva.github.io/SAP007-card-validation/) uma empresa de validação de cartão, onde o principal usuário do nosso serviço 
são empresas que oferecem cartão de credito.
Nosso objetivo e facilitar e agilizar para o nosso cliente a emissão do cartão de crédito, enviando para eles 
uma numeração válida.
Com essa etapa de validação tercerizada, o tempo que o cliente final espera para receber seu cartao em casa é reduzido. 
Para o usuário final proejetei uma interface simples e de facil compreensão, um layout com tons de azul e figuras deixando o site visualmente mais atraente de olhar e ler seu conteúdo, escrevo um pouco sobre a empresa , como funciona o processo de validação do número do cartão.