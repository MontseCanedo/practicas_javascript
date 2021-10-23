

// function juego(usuario, cpu) {
//     if(cpu == "piedra")
//     {
//         if(usuario == cpu)
//         {
//             console.log("empataste");
//         }
//         else if(usuario == "papel")
//         {
//             console.log("Felicidades! papel cubre piedra");
//         }
//         else if(usuario == "tijera")
//         {
//             console.log("oh no! piedra aplasta tijera");
//         }
//         else
//         {
//             console.log("Esa no era una opcion");
//         }
//     }
//     else if(cpu == "papel")
//     {
//         if(usuario == cpu)
//         {
//             console.log("empataste");
//         }
//         else if(usuario == "piedra")
//         {
//             console.log("Oh no! papel cubre piedra");
//         }
//         else if(usuario == "tijera")
//         {
//             console.log("Felicidades! tijera corta papel");
//         }
//         else
//         {
//             console.log("Esa no era una opcion");
//         }
//     }
//     else if(cpu == "tijera")
//     {
//         if(usuario == cpu)
//         {
//             console.log("empataste");
//         }
//         else if(usuario == "piedra")
//         {
//             console.log("Felicidades! piedra aplasta tijera");
//         }
//         else if(usuario == "papel")
//         {
//             console.log("Oh no! tijera corta papel");
//         }
//         else
//         {
//             console.log("Esa no era una opcion");
//         }
//     }
// }

var usuario = prompt("Ingrese su jugada");
var cpu = "piedra";

switch(usuario)
{
    case "piedra":
        console.log("empataste");
        break;
    case "papel":
        console.log("Felicidades! papel cubre piedra");
        break;
    case "tijera":
        console.log("Oh no! piedra aplasta tijera");
        break;
    default:
        console.log("No escogiste una opcion válida");
}