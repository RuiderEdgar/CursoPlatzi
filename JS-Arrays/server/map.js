const letters = ['a','b','c'];

const newArray = [];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');
}
console.log(letters)
console.log(newArray)
console.log()


console.log(letters.map(letter => letter + '++'));