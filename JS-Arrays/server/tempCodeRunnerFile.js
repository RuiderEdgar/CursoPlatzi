const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element
}

console.log(sum)

const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('rta',rta);

//reduce reloaded
const items = [1,3,2,3];

const rta2 = items.reduce((objeto, item) => {
    if (!objeto[item]){
        objeto[item] = 1;
    } else{
        objeto[item] += 1
    }
    return objeto;
}, {})

console.log('rta2', rta2)