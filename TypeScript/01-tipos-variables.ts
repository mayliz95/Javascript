let nombre: String;
let edad: Number = 22;
let fecha: Date = new Date();

class Usuario {
    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        //Template Strings tilde nvertida
        console.log(`El usuario se llama  ${this.mNombre}`);
    }
}

let usuario: Usuario = new Usuario('Mayra', 22, '1003308960');

function noHaceNada() {

}

console.log(noHaceNada());
console.log(noHaceNada);
usuario.imprimirEnConsola();
let usuarioOtro = {
    mNombre: 'May',
    mEdad: 22,
    mCedula: '1003308960'
}
console.log(usuario);
console.log(usuarioOtro)
//drusuario.imprimirEnConsola();
//cedula = '1003308961'; //error de read only

interface usuarioDos {
    mNombre: String;
    mEdad: Number;
    mCedula: String;

    imprimirEnConsola(nombre: String): void;
}

let usuarioTres: usuarioDos;

class usuarioCuatro {
    constructor(public mNombre: String,
                private mEdad: Number,
                protected mCedula: String) {
    }
}
