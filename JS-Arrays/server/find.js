//find devuelve el elemento en particular y solo uno y el primer elemento que hace match
//si no encuentra ningun elemento, devuelve undefined
//findIndex devuelve la posision donde está y si no está devuelve -1
const number = [1,30,49,29,10,13];

let rta = undefined;
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element === 30) {
        rta = element;
        break;
    }
}
console.log(rta)

const rta2 = number.find(item => item === 30);
console.log(rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔');
console.log(rta3);

const rta4 = products.findIndex(item => item.id === '🍔');
console.log(rta4);