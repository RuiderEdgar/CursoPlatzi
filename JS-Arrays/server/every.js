//retorna false o true

const number = [1,30,39,29,10,13];

let rta = true;

for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element >= 40) {
        rta = false;
    }
}
console.log(rta);

const rta2 = number.every(item => item <= 40);
console.log(rta2);
