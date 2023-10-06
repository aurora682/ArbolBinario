class ALumno{
    constructor(nombre){
        this.nombre = nombre;
    }
    imprimirNombre(){
        console.log(this.nombre);
    };
};
//Instanciamos un objeto para el alumno
let didi = new ALumno("Didier");
didi.imprimirNombre();

//Tipo de declaración de variables
//var: viariable local (ya no se usa), nivel de función
//let: variable "local", nivel de bloque
//const: constante