var estudiantes = ["Montse", "Carla", "Alejandra", "Yolanda"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//2
var estudiantes = ["Montse", "Carla", "Alejandra", "Yolanda"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiantes);
}