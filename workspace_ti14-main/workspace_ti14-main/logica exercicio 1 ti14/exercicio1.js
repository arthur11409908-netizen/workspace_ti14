let distanciaPercorrida // entrada - input
let combustivelEmLitros // entrada - input
let consumoMedio // saida - output

distanciaPercorrida = prompt("INFORME A DISTANCIA A SER PERCORRIDA EM KM")

combustivelEmLitros = prompt("INFORME A QUANTIDADE GASTA EM LITROS DE COMBUSTIVEL")

distanciaPercorrida = parseFloat(distanciaPercorrida)
combustivelEmLitros = parseFloat(combustivelEmLitros)


consumoMedio = distanciaPercorrida  / combustivelEmLitros

alert(" O consumo medio do veiculo e: " + consumoMedio + "litros" )
