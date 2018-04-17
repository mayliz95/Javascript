var nombre = "May"
var edad = 22
var fecha = new Date();
var casado = false; // true
var casa = undefined;  //Undefined es falso
var carro = null;
var arregloNumeros = [1,2,3,4]

console.log(sumarDosNumero(3,5))

var usuario = {
    "nombre":"Mayra",
    apellido:"Rosero", //No es necesario utilizar commillas dobles
    cedula: '1003308960',//Es una buena practica utilizar solo comillas simples
    imprimirEnConsola: sumarDosNumerosVersionDos
};

var arreglo = [nombre,edad,fecha, casado, casa, carro, usuario, sumarDosNumero(2,3), sumarDosNumero]

console.log(arreglo)

//console.log(usuario.imprimirEnConsola(1,2));

function sumarDosNumero(numeroUno,numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumero(3,5))

var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionDos(2,5))