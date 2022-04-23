const string = "Java es maravilloso, con Java puedo crear el futuro de la web";

const replacedString = string.replace("Java","Python");

string

replacedString

const replacedString2 = string.replaceAll("Java", "Python");
replacedString2

class Message{
    show(val){
        console.log(val);
    };
    /*
    get #add(val){
        
    }
    */
   //LA # para hacer privada
}

const message = new Message();
message.show('Hola')

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

//el primero que resuelva lo regresa
Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));
/*
class anyClass {
    constructor(element)
    this.ref = new WeakMap(element)
    }
    {...}
}
*/

let isTrye = true
let isFalse = false;
console.log(isTrye &&= isFalse);

console.log(isTrye ||= isFalse);

isTrye = undefined

console.log(isTrye ??= isFalse)
