let desconto
let produto
let raizão

desconto = prompt("INFORME O DESCONTO")
produto = prompt("INFORME O PRODUTO")
raizão = prompt ("INFORME A RAZÃO")

desconto = parseFloat(desconto)
produto = parseFloat(produto)
raizao = parseFloat(raizão)

desconto = (produto * raizão) / 100
alert("o desconto e:" + produto)