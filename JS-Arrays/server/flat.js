const matriz = [
    [1, 2, 3],
    [4, 5,[1,2,[2,5],3], 6],
    [7, 8, 9],
];
const matriz2 = [ 1, 2, 3, 4, 5, 
                [ 1, 2, 
                    [ 2, 5 ], 
                3 ], 
           6, 7, 8, 9 ];
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}

const rta = matriz.flat(3);
console.log(rta);

//propio flat sin el .flat()
const ownFlat = (matriz) => {
    let array = [];
    for (element of matriz) {
        if (Array.isArray(element)) {
            array = array.concat(ownFlat(element));
        } else{
            array.push(element);
        }
    }
    return array
};
console.log(ownFlat(matriz))
console.log(ownFlat(matriz2))


