let distancia
let tempo 
let velocidade

distancia = prompt("INFORME A DISTANCIA PERCORRIDA")
tempo = prompt("INFORME O TEMPO")
velocidade = prompt("INFORME A VELOCIDADE")

distancia = parseFloat(distancia)
tempo = parseFloat(tempo)
velocidade = parseFloat(velocidade)

velocidade = distancia / tempo 
alert("a velocidade media e:" + tempo)
