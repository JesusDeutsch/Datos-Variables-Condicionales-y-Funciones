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
console.log(onion, " Gr de cebolla");
console.log(clients % 2 === 0 && 0);
