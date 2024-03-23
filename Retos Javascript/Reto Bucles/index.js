let lineas= "----------"
for( i = 0; i <= 5; i++){
 console.log(i);
 }
console.log(lineas)
 colors = ["rojo","verde","azul","amarillo"];
 for (let nose of colors) {
     console.log(nose)
 }
 console.log(lineas)
 persona= {
 nombre: "Maria",
 edad: 27,
 profesion: "diseñadora"
 }
 for (let key in persona) {
     console.log( key+": " + persona[key])
 }
 let numero = 10;
 if(numero == 10){
    console.log(`El numero mas cercano a 100 cuyo cuadrado es menor que 100 es: ${numero}`);
 }
 console.log(lineas)
 let numeros =[1,2,3,4,5,6,7,8,9,10];
for(i = 0; i < numeros.length; i++){
     let operacion = numeros[i] % 2;
    if(operacion == 0){
    console.log(numeros[i])
}
 }