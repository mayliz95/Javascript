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
function noHaceNada() {
}
console.log(noHaceNada());
console.log(noHaceNada);
usuario.imprimirEnConsola();
var usuarioOtro = {
    mNombre: 'May',
    mEdad: 22,
    mCedula: '1003308960'
};
console.log(usuario);
console.log(usuarioOtro);
var usuarioTres;
var usuarioCuatro = /** @class */ (function () {
    function usuarioCuatro(mNombre, mEdad, mCedula) {
        this.mNombre = mNombre;
        this.mEdad = mEdad;
        this.mCedula = mCedula;
    }
    return usuarioCuatro;
}());
