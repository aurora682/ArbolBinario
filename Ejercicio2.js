/*console.log("Cadena de texto")
A = 'Texto en forma 1'
A = "Ingresar caracteres especiales '\'"
A = "Ingresar caracteres especiales '\\'"
console.log("Aquí hay texto")*/

//Variables en js
/*var a = 10
let b = 8
const c = 2*/

//Salidas a consola
/*console.log('a =' + a)
console.log('b =' + b)
console.log('c =' + c)*/

//Operaciones entre variables
/*for(let i=0; i<5; i++){
    //console.log(b+i)
}*/
//let se usa en un entorno local para defenir variable que dejan usarse fuera de un bloque de código
//console.log(b+i)
//var arreglo = [1,2,3,4,5,6];
/*var arreglo = ['Primero', 'Segundo', 'Tercero', 'Cuarto']
for (let i=0; i<arreglo.length; i++){
    let leyenda = "El elemento";
    console.log(leyenda + arreglo[i]);
}*/

function imprimir(arregloEnUso){
    let numElementos = arregloEnUso.length;
    for (let i=0; i<numElementos; i++){
        let leyenda = "El elemento ";
        console.log(leyenda + arreglo[i]);
    }
}
var arreglo2 = [];
for (let i=0; i<100; i++){
    arreglo2[i]=i;
}

imprimir(arreglo2)