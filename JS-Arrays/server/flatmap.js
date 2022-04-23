const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  const rta = users.map(user => user.attributes).flat();
  console.log(rta);
  
  const rta2 = users.flatMap(user => user.attributes);
  console.log(rta2);

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};

console.log(calendars.primaryCalendar);
const filtro = calendars.primaryCalendar.flat();
console.log(filtro);

const respuesta = Object.values(calendars).flatMap(item => {
    return item.map(item => item.startDate)
});
console.log('respuesta',respuesta)

//Pruebas
const rta3 = Object.values(calendars)
console.log(rta3);

const rta4 = rta3.flat();
console.log(rta4);

const rta5 = rta4.map(item => item.startDate);
console.log(rta5)

const definitivo = rta3.flatMap(item => item.startDate);
console.log(definitivo);
