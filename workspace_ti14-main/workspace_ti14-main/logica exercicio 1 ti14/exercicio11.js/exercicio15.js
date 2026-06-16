let quantidadeDeUnidadesProduzidas
let custoDeFabricaçãoDeCadaUnidade
let custoTotal

quantidadeDeUnidadesProduzidas = prompt("INFORME A QUANTIDADE PRODUZIDAS")
custoDeFabricaçãoDeCadaUnidade = prompt("INFORME O CUSTO DE FABRICAÇÃO")
custoTotal = prompt("INFORME O TOTAL")

quantidadeDeUnidadesProduzidas = parseFloat(quantidadeDeUnidadesProduzidas)
custoDeFabricaçãoDeCadaUnidade = parseFloat(custoDeFabricaçãoDeCadaUnidade)
custoTotal = parseFloat(custoDeFabricaçãoDeCadaUnidade)

custoTotal = quantidadeDeUnidadesProduzidas * custoDeFabricaçãoDeCadaUnidade
alert("o custo total e:" + custoDeFabricaçãoDeCadaUnidade)

