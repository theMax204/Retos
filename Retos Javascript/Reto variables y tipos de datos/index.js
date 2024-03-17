let yo = "Maximiliano"
let saludo = "¡Hola mundo!"
let resultado = `${saludo} Soy ${yo}`
console.log(resultado)
console.log("Mi nombre en mayusculas es: " + yo.toUpperCase())
console.log("Mi nombre en minusculas es: " + yo.toLowerCase())
let saludoco = ` "${saludo}"`;
console.log("EL mensaje de" + saludoco + " tiene " + saludo.length + " caracteres.")
let array= [1, 2, 3, 4, 5]
console.log("El tercer numero del array con los valores " + array + " es: " + array[2])
console.log("Se añade el numero que sigue en orden al final del arreglo y es: " + array.push(6))
let texto= '\"La lluvia en Sevilla e una maravilla\"'
let textoClima = "\'lluvia\'"
console.log("Se encontro el patron 'lluvia' en el texto " + texto +", por lo que el resultado es: " + textoClima)
