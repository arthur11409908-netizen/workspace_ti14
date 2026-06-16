let contaEnergiaEletrica
let contaAgua
let contaInternet
let aluguel
let funcionarios
let custoTotal

contaEnergiaEletrica = parseInt(  prompt("informe o valor da conta de energia eletrica"))
contaAgua =   parseInt(  prompt("informe o valor da conta de agua"))
contaInternet = parseInt(  prompt("informe o valor da sua conta de internet"))
aluguel = parseInt(  prompt("informe o valor do aluguel"))
funcionarios = parseInt(  prompt("informe o valor com os funcionarios"))



custoTotal = contaEnergiaEletrica + contaAgua + contaInternet + aluguel + funcionarios

alert( " O CUSTO TOTAL E R$" + custoTotal)

