/*1.- En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la
longitud del tramo en kilómetros y el tiempo empleado en horas enteras, si la velocidad está entre 40 y 60 km/h el conductor pasa 
la prueba y en caso contrario es descalificado.
 */
 let kilometers=parseInt(prompt("Cantidad de kilometros"));
 let time=parseInt(prompt("Horas de recorrido"));
 let speed= kilometers/time;

 if (isNaN(kilometers)) {
    alert("No es un caracter valido")
 };
 if (isNaN(time)) {
    alert("No es un caracter valido")
 };
 console.log(speed + "Km/h");
if (speed >=40 && speed<=60) {
    alert("Has calificado")
} else {
    alert("Has sido descalificado")
}

/* 2.- Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio (Solicita tres números en tres inputs distintos).
El resultado que dará será "SUSPENDIDO" si la media es menor de 5, "APROBADO" si está entre 5 y 7 y "NOTABLE" por encima de 7. */

let firstQuarter=parseInt(prompt("Ingrese nota de primer trimestre"));
let secondQuarter=parseInt(prompt("Ingrese nota de segundo trimestre"));
let thirdQuarter=parseInt(prompt("Ingrese nota de segundo trimestre"));
let averageQuarter= firstQuarter+secondQuarter+thirdQuarter;
let averageFinal= averageQuarter/3;

if (averageFinal>7) {
    alert("NOTABLE")
} else if (averageFinal>=5) {
    alert("APROBADO")
} else if (averageFinal<5) {
    alert("SUSPENDIDO")
}

/* 3.- Este ejercicio le indicará a los clientes que se dirijan a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, 
cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no, pues, se le dirige a la barra de comida */

let drink=prompt("Puede escoger vino, cerveza, refresco o agua.");

if(drink==="vino"||drink==="cerveza"){
    alert("Dirijase a la barra")
} else {
    alert("Dirijase a la barra de comida");
}

/* 4.- El usuario tecleará dos números. Debe devolver por consola, la diferencia entre el mayor y el menor.*/

let number1=parseInt(prompt("Ingrese un numero"));
let number2=parseInt(prompt("Ingrese un numero"));
let subtract1= number1 - number2;
let subtract2= number2 - number1;

number1>number2
? console.log(subtract1)
: console.log(subtract2);

/* 5.- El usuario debe ingresar dos datos: un número y su cuadrado. Si es correcto el programa enviará 
un mensaje de acierto en caso contrario dirá que se produjo un error. */

let date=parseInt(prompt("Ingrese un numero"))
let dateresult=parseInt(prompt("Ingrese el cuadrado del numero ingresado"))

dateresult===(date*date)
?alert("Correcto")
:alert("Error")