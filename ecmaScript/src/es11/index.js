//Codigo por separado
/*
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
})
*/
const aBigNumber = 9007199254740991n;

const anotherBig = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBig);

const promise1 = new Promise((resolve, reject)=> reject("reject"));
const promise2 = new Promise((resolve, reject)=> resolve("resolve"));
const promise3 = new Promise((resolve, reject)=> resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//console.log(window);
console.log(globalThis);

const fooo = null ?? 'default string';
const fooo1 = 'hola' ?? 'default string';

fooo
fooo1

const user = {};

console.log(user?.profile?.email);

//lo tiene o no lo tiene?
if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail')
}