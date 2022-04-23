const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

let newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
console.log(newArray);

const rta = elements.concat(otherElements);
console.log('rta',rta);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, ...'random'];
console.log('rta2',rta2);
elements.push(...otherElements);
console.log('rta3',rta3);
console.log('elemets',elements);