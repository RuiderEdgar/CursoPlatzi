const lista = [];

function media(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista = sumaLista + lista1[i];
    // }
    const sumaLista = lista.reduce( //sumar un array con un metodo 
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length
    return promedio
}

function añadir() {
    
    const value = parseInt(document.getElementById("add").value);
    if(value === ''){
        document.getElementById("lista").innerHTML = `Escribe un numero en la lista`
    }else{
        lista.push(value);
        document.getElementById("lista").innerHTML = `Numeros en la lista: ${lista}`
        document.getElementById("add").value = "";
    }
    
}

function promedioResultado() {
    if (lista.length == 0){
        document.getElementById("promedio").value = 0;
    }else{
        mediaRes = media(lista);
        document.getElementById("promedio").value = mediaRes;
    }
    
}

function borrar(){
   lista.splice(0, lista.length);
   document.getElementById("lista").innerHTML = ""
   document.getElementById("promedio").value = "";
}

//*------Mediana-------


function Mediana(lista){
    const mitadLista = lista.length / 2;
    if((lista.length % 2) === 0){
        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];
        const promedio2Elementos = media([elemento1, elemento2]);
        
        return promedio2Elementos;
        
    } else{
        return lista[parseInt(mitadLista)];
    }
    
}

function medianaResultado() {   
    if (lista.length == 0){
        document.getElementById("mediana").value = 0;
    }else{
        let mediana = Mediana(lista);
        document.getElementById("mediana").value = mediana;
    }
}

function moda(lista) {
    const lista1Count = {};
    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1
            }else{
                lista1Count[elemento] = 1;
            }
            
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    const arrayModa = lista1Array[lista1Array.length - 1];
    const moda = parseInt(arrayModa[0]);
    return moda;
}


function modaResultado(){
    if (lista.length == 0){
        document.getElementById("moda").value = 0;
    }else{
        let modaR = moda(lista);
        document.getElementById("moda").value = modaR;
    }
}