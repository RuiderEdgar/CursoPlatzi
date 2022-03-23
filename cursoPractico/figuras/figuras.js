//-----Cuadrado----
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
} 

console.groupEnd();

//-----Triángulo----
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1)  + parseInt(lado2) + parseInt(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

//-----Circulo----
console.group("Circulo");
const pi = Math.PI;

function diametro(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametro(radio) * pi;
}

function areaCirculo(radio) {
    return pi * (radio*radio);
}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("lado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    document.getElementById("texto").innerHTML = "El perimetro del cuadrado es: "
    document.getElementById("resultado").value = perimetro + " cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("lado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("texto").innerHTML = "El área del cuadrado es: "
    document.getElementById("resultado").value = area + " cm^2";
}

function trianguloPerimetro(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("textoTriangulo").innerHTML = "El perimetro del triángulo es: "
    document.getElementById("resultadoTriangulo").value = perimetro + " cm";
}
function trianguloArea(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const area = areaTriangulo(altura, base)
    document.getElementById("textoTriangulo").innerHTML = "El área del triángulo es: "
    document.getElementById("resultadoTriangulo").value = area + " cm";
}
function circuloPerimetro(){
    const radio = document.getElementById("radio").value;
    const perimetro = perimetroCirculo(radio);
    document.getElementById("textoCirculo").innerHTML = "El perimetro del circulo es: "
    document.getElementById("resultadoCirculo").value = perimetro + " cm";
}
function circuloArea(){
    const radio = document.getElementById("radio").value;
    const area = areaCirculo(radio);
    document.getElementById("textoCirculo").innerHTML = "El área del circulo es: "
    document.getElementById("resultadoCirculo").value = area + " cm";
}

