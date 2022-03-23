var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 500},
    {nombre: "Celular", costo: 7200},
    {nombre: "Laptop", costo: 21000},
    {nombre: "Teclado", costo: 3200},
    {nombre: "Television", costo: 2300},
    {nombre: "Teclado", costo: 1200}
];

//--------Filtro por numero de costo
var articulosFiltados = articulos.filter(function(articulo){
    return articulo.costo <= 2500
})

articulosFiltados

//------mapa donde regresa los nombres de todos los articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

nombreArticulos

//------"Buscador" de un articulo por comparacion SOLO EL PRIMER RESULTADO
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Teclado"
})

encuentraArticulo

//------imprime solo los nombre
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//-----some() regresa verdadero o falso, si existe un articulo menos a 700 --- filtro
var articuloBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700
})

articuloBaratos


var prueba = 4 == "4"
prueba