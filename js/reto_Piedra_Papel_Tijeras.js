//variables
//funcion donde haga la validación
main();

function main(){
    console.log("====Piedra, Papel o Tijeras====");
    console.log("Elije un arma:");
    console.log("1. Piedra");
    console.log("2. Papel");
    console.log("3. Tijeras")
    var arma = 3;
    var cpuArma = 3;
    validacion(arma, cpuArma)

}

function validacion(arma, cpuArma){
    if (arma === cpuArma){
        console.log("Empate");
    } else if (arma === 1 && cpuArma === 2){
        console.log("Perdiste...");
    } else if (arma === 1 && cpuArma === 3){
        console.log("Ganaste!!");
    } else if (arma === 2 && cpuArma === 1) {
        console.log("Ganaste!!");
    } else if (arma === 2 && cpuArma === 3) {
        console.log("Perdiste...");
    } else if (arma === 3 && cpuArma === 1) {
        console.log("Perdiste...");
    } else if (arma === 3 && cpuArma === 2) {
        console.log("Ganaste!!");
    } else {
        console.log("No es una opcion!");
    }
}