if (true){
    console.log("Hola");
}
if (false){
    console.log("Hola");
}

if (false){
    console.log("Hola");
} else {
    console.log("Soy falso");
}
var edad = 18;
if(edad === 18){
    console.log("Puedes votar, será tu 1er votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

//if en una sola linea

//**Sintaxis: condition ? true : false;**

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";

console.log(resultado)
