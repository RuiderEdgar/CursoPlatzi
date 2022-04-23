//para cambiar el orden
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
//con acentos o caracteres epeciales
words.sort((a, b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: false,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a, b) => b.total - a.total);
console.log(orders);

orders.sort((a, b) => a.customerName.localeCompare(b.customerName));
console.log(orders);

orders.sort((a, b) => Number(a.delivered) - Number(b.delivered));
console.log(orders);

const ordersV2 = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      datePurchased: "2022-01-12 12:00:00",
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      datePurchased: "2022-01-20 12:00:00",
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      datePurchased: "2022-01-01 12:00:00",
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      datePurchased: "2022-01-15 12:00:00",
    },
  ];

ordersV2.sort((a, b) => new Date(a.datePurchased) - new Date(b.datePurchased));
console.log(ordersV2);