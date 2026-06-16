let salarioSemanal // entrada - input
let horasTrabalhadas // entrada - input
let ValorPagoPorHora // entrada - input

quantidadeDeHoras = prompt("INFORME A QUANTIDADE DE HORAS TRABALHADAS")
ValorPagoPorHora = prompt(" INFORME A QUANTIDADE DE VALOR PAGO POR HORAS")
 

 quantidadeDeHoras = parseFloat(quantidadeDeHoras)
 ValorPagoPorHora = parseFloat (ValorPagoPorHora)


 salarioSemanal = quantidadeDeHoras * ValorPagoPorHora

 alert(" salario semanal e: " + salarioSemanal)
