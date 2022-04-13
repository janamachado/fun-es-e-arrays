
function positions(firstPlace, secondPlace, lastPlace)
    let podioFInal = (firstPlace, secondPlace, lastPlace)
    firstPlace     = podioFInal[0];
    secondPlace    = podioFInal[1];
    lastPlace      = podioFInal[2];
let competidores   = ["Daniel", "Rafael", "Manoel"];

if(firstPlace == "Daniel"){
    return "1º - Colocado " + firstPlace + "2º - Colocado " + secondPlace + "3º - Colocado " + lastPlace
}
if(secondPlace == "Daniel"){
    return "1º - Colocado " + firstPlace + "2º - Colocado " + secondPlace + "3] - Colocado " + lastPlace
}
if(lastPlace == "Daniel"){
    return "1º - Colocado " + firstPlace + "2º - Colocado " + secondPlace + "3º - Colocado " + lastPlace
}

console.log(`1º colocado é: ${firstPlace}` + `2º colocado é: ${secondPlace}` + `3º colocado é: ${lastPlace}`)
console.log 
















//Você está trabalhando nos bastidores do Maraton Kenzie. Não tem mais hipóteses do cenário mudar além dos três que já lideram a prova, a distância para o quarto colocado já é enorme. Rafael, Manoel e Daniel estão em uma disputa acirrada para conquistar a primeira posição. Daniel tem vantagem, pois, no percurso, conseguiu cumprir a tarefa extra. Desenvolva a função para criarmos o pódio.
//Problema - Maraton Kenzie
//Para está entrega você irá exercitar os conceitos de funções, condicionais e array's

//Crie uma função chamada positions, esta função deverá receber como argumento 3 parâmetros; firstPlace, secondPlace, lastPlace
//Você deverá criar uma array composto pelo, os três parâmetros recebidos pela função. A posição em que o parâmetro é inserido no array, é considerado a posição do atleta na corrida.
//O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição. Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.
//Após realizar esta rotina a função deverá imprimir no console o resultado. Deverá seguir o seguinte modelo: 1ª - Colocado "nomeDoCompetidor". Queremos saber a posição de todos os 3 primeiros colocados.