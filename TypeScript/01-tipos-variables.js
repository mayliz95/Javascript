var nombre;
var edad = 22;
var fecha = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings tilde nvertida
        console.log("El usuario se llama  " + this.mNombre);
    };
    return Usuario;
}());
var usuario = new Usuario('Mayra', 22, '1003308960');
usuario.imprimirEnConsola();
//cedula = '1003308961'; //error de read only
