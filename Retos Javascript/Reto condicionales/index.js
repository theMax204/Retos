let usuario = 19;
if (usuario >= 18) {
    console.log("Eres mayor de edad.")
} else {
    console.log("Eres menor de edad.")
}

let accion= 1;
switch (accion) {
    case 1:
        console.log("La accion es crear.")
        break;
    case 2:
    console.log("La accion es colocar.")
        break;
    case 3:
    console.log("La accion es borrar.")
        break;
    case 1:
    console.log("La accion es actualizar.")
        break;
    default:
        console.log("No se ingreso ninguna accion.")
        break;
}

let numero =3;
let result = numero % 2 ? "El numero ingresado es impar." : "El numero ingresado es par.";
console.log(result)