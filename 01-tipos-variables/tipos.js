var nombre = "22"
var edad = 22
var fecha = new Date();
var casado = false; // true
var casa = undefined;  //Undefined es falso
var carro = null;
var arreglo = []

var usuario = {
    "nombre":"Mayra",
    apellido:"Rosero", //No es necesario utilizar commillas dobles
    cedula: '1003308960',//Es una buena practica utilizar solo comillas simples
    imprimirEnConsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
    }
}

console.log(usuario.imprimirEnConsola());

function sumarDosNumero(numeroUno,numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumero(3,5))

var sumarDosNumerosVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}
console.log(sumarDosNumerosVersionDos(2,5))

