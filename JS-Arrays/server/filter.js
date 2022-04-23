const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log(newArray)

const rta = words.filter(item => item.length >= 6)
console.log('rta',rta)

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Edgar',
        total: 190,
        delivered: true,
    },
    {
        customerName: 'Edgar',
        total: 125,
        delivered: false,
    },
    {
        customerName: 'Luis',
        total: 90,
        delivered: false,
    }
];

const rta3 = orders.filter(item => item.delivered);
console.log('rta3',rta3);

const rta4 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta4',rta4);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Ed'));
console.log(search('a'));