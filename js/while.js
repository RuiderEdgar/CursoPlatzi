var estudiantes = ["Maria","Edgar","Sergio","Rosa"];

function saludar(estudiante){
    console.log(`Hola, ${estudiante}\n`);
}


while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludar(estudiante);
   
}