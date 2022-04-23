const number = [1,2,3,4];

//si al menos una sucede, some() imprime o retorna falseo true
let rsa = false;
for (let index = 0; index < number.length; index++) {
    const element = number[index];
    if (element % 2 === 0) {
        rsa = true;
        break;
    }
}
console.log(rsa)

const rta2 = number.some(item => item % 2 === 0);
console.log('rta2',rta2)

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

const rta3 = orders.some(item => item.delivered);
console.log('rta3',rta3);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  //funcion importada para fechas
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
      return dates.some(date => {
          return areIntervalsOverlapping(
              {start: date.startDate, end: date.endDate}, //fecha inicial
              {start: newDate.startDate, end: newDate.endDate}, //fecha recibida
          )
      })
}

console.log('is overlap ',isOverlap(newAppointment));


