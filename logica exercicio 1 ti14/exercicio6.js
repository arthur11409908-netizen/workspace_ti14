let total
let diasDeAluguel
let valorCobradoPorDia

diasDeAluguel = prompt("INFORME OS DIAS DE ALUGUEL")
valorCobradoPorDia = prompt("INFORME OS DIAS COBRADO")

diasDeAluguel = parseFloat(diasDeAluguel)
valorCobradoPorDia = parseFloat(valorCobradoPorDia)

total = diasDeAluguel * valorCobradoPorDia
alert("o valor a ser pago e:" + diasDeAluguel)

