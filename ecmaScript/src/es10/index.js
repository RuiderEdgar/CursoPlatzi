let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.length);
console.log(array.flat(2));

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]))

//Quitar espacios
let hello = '                 hello world';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'hello world               ';
console.log(hello1);
console.log(hello1.trimEnd());

try {
    
} catch {
    error
}

let entries = [["name", 'Edgar'], ['age', '21']]; 
console.log(Object.fromEntries(entries));

objeto = Object.fromEntries(entries);

console.log(objeto)

obj2 = {
    ...objeto,
    country: 'MX',
}

console.log(obj2)


let mySymbol = `My simbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);