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
const items = [1,3,2,3, 5,5,4,8,2,1,3,6,5,4,7,8,95,7,8,4,81,5];

const rta2 = items.reduce((objeto, item) => {
    if (!objeto[item]){
        objeto[item] = 1;
    } else{
        objeto[item] += 1
    }
    return objeto;
}, {})

console.log('rta2', rta2)

//output
/*
{
    1: 1,
    3: 2,
    2: 1
}
*/

const data = [
    {
        customerName: 'Nicolas',
        level: "low"
    },
    {
        customerName: 'Zulema',
        level: "medium"
    },
    {
        customerName: 'Santiago',
        level: "hard"
    },
    {
        customerName: 'Edgar',
        level: "medium"
    },
    {
        customerName: 'Luis',
        level: "low"
    }
];

const rta3 = data
.map(item => item.level)
.reduce((objeto, item) => {
    if (!objeto[item]){
        objeto[item] = 1;
    } else{
        objeto[item] += 1
    }
    return objeto;
}, {})

console.log('rta3',rta3);

//reto
const numeros = [1,2,5,8,9,4,7,8,5,6,3,2,1,5,4,6,9,8,7,4,5,1,2,3,5,2,2,3,5,5,9,4,10,7,2,5,8,9];

const rta4 = numeros.reduce((obj, item) => {
    if (item >= 9) {
        obj["9-10"] += 1;
    } else if (item >= 6) {
        obj["6-8"] += 1;
    }else{
        obj["1-5"] += 1;
    }
    return obj;
}
,{
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
});

console.log('rta4',rta4);