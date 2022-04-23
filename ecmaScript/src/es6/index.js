function newFunction(name, country, age){
    var name = name || 'Edgar';
    var age = age || 21;
    var country = country || 'MX';
    console.log(name, age, country);
}
 newFunction();

 //--------------funciones ES6
function newFunction2(name= 'Edgar', age = 21, country = "MX") {
    console.log(name, age, country);
};
newFunction2();
newFunction2('Rodrigues', 50, "EU");

//----------------templates

let hello = "Hello";
let world = "World";
let epicPhase = hello + ' ' + world;
console.log(epicPhase);

//-------------------ES6
let epicPhase2 = `${hello} ${world}`;
console.log(epicPhase2);

let lorem ="lorem input intype of character pum!\n"; + "otra frase que se mete";
//-----------------ES6
let lorem2 = `otra frase que ese est haicendip
pero ahora puedo meter saltos de linea sin el slash n /n
`;
console.log(lorem2)

//--------------para asignar
let person = {
    'name': 'Edgar',
    'age': 21,
    'country': 'MX'
}

console.log(person.name, person.age);

//let {name, age, country} = person;
//console.log(name, age, country)

//--ES6
let {name} = person;
console.log(name)

//------------arreglos ES6
let team1 = ['Edgar','Luis','Raul'];
let team2 = ['Valeria', 'Paola', 'Felix'];

let education = ['David', ...team1, ...team2];

console.log(education)

//-------------variables

var hola = 'hola'; //global
let feo = 'feo'; //scope
{
    var global = 'Global var';
}
/*
{
    let globalLet = 'Global Let';
}
*/
console.log(global);
//console.log(globalLet);

const a = 'b';
console.log(a)
//a = 'a'
console.log(a)

//-------------Objetos

let name1 = 'Edgar';
let age = 21;

obj = {name1, age};
console.log(obj);

//----------Funciones de tipo flecha

const names = [
    {name: 'Edgar', age: 21},
    {name: 'Luis', age: 51}]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

console.log(listOfNames)

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
   // ...
   console.log(item.name);
}

const listOfNames4 = name => {
    //...
    console.log(item.name);
}

const square = num => num * num;

//--------Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!")
        }else{
            reject("Ups...");
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('Hola :3'))
    .catch(error => console.log(error));

//Clases

class calculator {
   constructor() {
       this.valueA = 0;
       this.valueB = 0;
   }

   sum(valueA, valueB){
       this.valueA = valueA;
       this.valueB = valueB;
       return this.valueA + this.valueB;
   }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Export
//export { hello } from './module'

//hello();

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)


