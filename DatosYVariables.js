/* 
1.- Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un código que, dado el número de comensales, calcule las cantidades de ingredientes necesarios y muestre por consola,
 un mensaje que indique el numero de comensales, y la cantidad de cada uno de los ingredientes. 

 -Declaramos las distintas variables usando "let"
 -Se Utiliza "isNaN" para validar que el caracter ingresado es un numero, si no, arrojara un "alert" indicado que el 
 caracter escrito no es un numero.-El numero ingresado sera multiplicado por la cantidad de material necesitado por persona para relizar el producto,
 luego divido entre "1000" para llevar los gramos a kilogramos la cantidadx.*/

let clients = prompt("Ingrese numero de comensales");
let potato = (200 * clients) / 1000;
let eggs = 1 * clients;
let onion = (300 * clients) / 1000;

if (isNaN(clients)) {
  alert("El valor ingresado no es un numero valido");
}
console.log("Cantidad de comensales", clients);
console.log(potato, " Kg de patata");
console.log(eggs, " Huevos");
console.log(onion, " Kg de cebolla");

/* 2.- Dado un número por el usuario, devuelve por consola "true" si es un número par 
y "false" si es un número impar. No usar condicionales!!! aunque, puedes usar operadores de comparación.

-Al no poder usar condicionales, una de las alternativas seria usar igualdad estricta "===" 
para comparar con cero(0) el resultado que nos de el numero que nos da el usuario entre 2, arrojando "true" si es par
y "false" si es impar 
*/

let number = prompt("Ingrese un numero");
console.log(number % 2 === 0);

/* 3.- En este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
¿Crees que es necesario recordar que una hora son 60 minutos y cada minuto son 60 segundos? ¿Por dónde mostraras el resultado?

*/

let seconds= 60
let hours= 60
