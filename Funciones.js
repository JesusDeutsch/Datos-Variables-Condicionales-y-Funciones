/*0.- Crea una función que salude al usuario por su nombre.*/

// function hello() {
//     console.log("Hello Yisus");    
// }
// hello();

/* 1.- Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. 
Se asume que se usarán solo números válidos, no letras o símbolos, es decir, no hace falta comprobar el dato ingresado.  */


// function sumar(num1, num2) {
// return (num1 + num2)    
// }
// num1= parseInt(prompt("Ingrese un numero"))
// num2= parseInt(prompt("Ingrese un numero"))
// console.log(sumar(num1,num2));
// alert(sumar(num1,num2));

/* 2.- Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. 
Se acepta que solo se usarán números válidos. Si quieres hacer la validación del dato, sería genial lograrlo. 
Puedes hacerlo aplicando condicionales, sin embargo, tienes las herramientas para hacerlo sin usar las condicionales. */

// let num3=parseInt(prompt("Inbgrese un numero para saber si es par o no."));

// function esPar(num3) {
//     return  (num3 %2===0)
// }
// console.log(esPar(num3));
// if (isNaN (num3)) {
//     alert("El caracter ingresado no es un numero")
// }

/* 3.- Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea una función y 
sus condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno. */

// let lado1=3;
// let lado2=6;
// let lado3=9;

// function triangulo(lado1,lado2,lado3)
// {
//     if(lado1==lado2&&lado1==lado3)
//         alert('Equilatero');
//     if((lado1==lado2&&lado1!=lado3)||(lado1==lado3&&lado1!=lado2)||(lado2==lado3&&lado2!=lado1))
//         alert('Isosceles');
//     if(lado1!=lado2&&lado3!=lado3&&lado2!=lado3)
//         alert('Escaleno');
// }
// console.log(triangulo(lado1,lado2,lado3));

/* 4.- Subimos el nivel?... crea un programa que simule una calculadora con funciones para realizar 
operaciones matemáticas básicas. Pide al usuario dos números y el operador que utilizaras( "+" , "-" , "*" , "/" ). */





















/* 5.-  And last but not least:


The Body Mass Index (BMI) is a way to estimate whether a person has a healthy weight for their height. It is calculated by dividing a person's weight (in kilograms) by the square of their height (in meters).

Your task is to write a function calculateBMI(weight, height) that takes two arguments: weight (in kilograms) and height (in meters), and returns the calculated BMI.

In addition, the function should return a string that interprets the BMI according to the following table:
Less than 18.5: 'Underweight'
18.5 - 24.9: 'Normal'
25 - 29.9: 'Overweight'
30 or more: 'Obesity'


For example, calculateBMI(70, 1.75) should return 'Normal'.

Remember to round the BMI to two decimal places. */

let weight= parseInt(prompt("Ingrese su peso"));
let height= parseInt(prompt("Ingrese su estatura"));
let height2= (height**height);
let bmi= (weight / height2);

alert("BMI="+ bmi);

let bmiValue= bmi;

if (bmiValue<18.5) {
    alert("Underweight")
} else if(bmiValue=>18.5 || bmiValue<=24.9){
    alert("Normal")
} else if (bmiValue=>25||bmiValue<=29.9) {
    alert("Overweight")
} else if(bmiValue>=30) {
    alert("Obesity")
} 

console.log(bmi)
console.log(height2)