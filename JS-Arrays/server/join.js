const elements = ['Fire', 'Air', 'Water', 'dirt'];

let rta = '';
const separator = '---'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rta = rta + element + separator;
}
console.log(rta);

const rta2 = elements.join('---');
console.log(rta2);

const title = 'Curso de Manipulacion de Arrays';

console.log(title.split(' ').join('/').toLowerCase());
