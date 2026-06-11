let IMC
let pessoa
let altura

IMC = prompt("INFORME O IMC")
pessoa = prompt("INFORME A PESSOA")
altura = prompt ("INFORME A ALTURA")

IMC = parseFloat(IMC)
pessoa = parseFloat(pessoa)
altura = parseFloat(altura)
 
IMC = pessoa / altura **2
alert("O iMC e:" + altura)