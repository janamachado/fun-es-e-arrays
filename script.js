function positions(firstPlace, secondPLace, lastPlace){
const arrayPositions = [firstPlace, secondPLace, lastPlace]
let podioFinal;

    if(lastPlace === "Daniel"){
        podioFinal = [`1º colocado: ${firstPlace}  2º colocado: Daniel 3º colocado: ${secondPLace}`];

    }else if(secondPLace === "Daniel"){
        podioFinal = [`1º colocado: Daniel 2º colocado: ${firstPlace} 3º colocado: ${lastPlace}`];

    }else{
        podioFinal = arrayPositions
    }    

    return podioFinal
}
positions("Daniel", "Manoel", "Rafael")