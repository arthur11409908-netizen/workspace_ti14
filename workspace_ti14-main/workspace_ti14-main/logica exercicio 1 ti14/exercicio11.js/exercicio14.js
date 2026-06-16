let quantidadeDeIngressosVendidos
let valorUnitario
let montante

montante = prompt("INFORME O MONTANTE")
valorUnitario = prompt("INFORME O VALOR UNITARIO")
quantidadeDeIngressosVendidos = prompt("INFORME O VALOR UNITARIO")

montante = parseFloat(montante)
valorUnitario = parseFloat(valorUnitario)
quantidadeDeIngressosVendidos = parseFloat(quantidadeDeIngressosVendidos)

montante  = quantidadeDeIngressosVendidos * valorUnitario
alert("o montante e:" + quantidadeDeIngressosVendidos)
