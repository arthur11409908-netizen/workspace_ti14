let valorTotalDeUmaCompra
let quantidadeDeProdutosAdquiridos
let PreçoDeCadaUnidade

quantidadeDeProdutosAdquiridos = prompt("INFORME A QUANTIDADE DE PRODUTOS ADQUIRIDOS")
PreçoDeCadaUnidade = prompt(" INFORME O PREÇO DE CADA UNIDADE")

quantidadeDeProdutosAdquiridos= parseFloat(quantidadeDeProdutosAdquiridos)
PreçoDeCadaUnidade = parseFloat (PreçoDeCadaUnidade)

valorTotalDeUmaCompra = quantidadeDeProdutosAdquiridos * PreçoDeCadaUnidade

alert(" O valor total de uma compra e: " +  valorTotalDeUmaCompra)

