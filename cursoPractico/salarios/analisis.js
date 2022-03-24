// Helpers - Utils
function esPar(numero) {
    return (numero % 2 === 0);
}

//calculadora

//mediana general
function media(lista) {
    const sumaLista = lista.reduce( //sumar un array con un metodo 
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length
    return promedio
}

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const promedio = media([personaMitad1, personaMitad2]);
        return promedio;
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
(120 * 90) / 100

const spliceStart = ((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;
const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})