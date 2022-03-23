var estudiantes = ["Maria","Edgar","Sergio","Rosa"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante}\n`);
}

// for (let i = 0; i < estudiantes.length; i++) {
//     saludar(estudiantes[i])
// }

for(var estudiante of estudiantes){
    saludar(estudiante)
}