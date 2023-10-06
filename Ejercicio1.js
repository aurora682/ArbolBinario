/*function imprimir(arregloMultiplos){
    let numMultiplos = arregloMultiplos.length;
    for (let i=0; i<numMultiplos; i++){
        let leyenda = "Soy un multiplo de 3 ";
        console.log(leyenda + arreglo[i]*3);
    }
    
}*/

function imprimir(arreglo){
    let numMultiplos = arreglo.length;
    var arreglo = [];
    for (let i=1; i<=100; i++){
    arreglo[i]=i;
    if(arreglo[i]%3===0){
        console.log("Soy un multiplo de 3 ")
    }else if (arreglo[i]%7===0){
        console.log("Soy un multiplo de 3 ")
    }else {
        console.log(arreglo[i]);
    }
}
}

imprimir(arreglo)

/*def suma(a, b):
    # Esta función toma dos números como argumentos y devuelve la suma de ellos
    return a + b



for (var i = 1; i <= 5; i++) {
    console.log(i);
}



function esPar(n) {
    return n % 2 == 0;
}



function suma(n) {
    // Esta función toma un número entero positivo como argumento y devuelve la suma de todos los números enteros desde 1 hasta ese número
    // Usamos una variable para almacenar el resultado de la suma
    let resultado = 0;
    // Usamos un bucle for para recorrer todos los números enteros desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        // Sumamos cada número al resultado
        resultado = resultado + i;
    }
    // Devolvemos el resultado
    return resultado;
}
console.log(suma(5)); // Esto imprime 15
console.log(suma(10)); // Esto imprime 55
console.log(suma(20)); // Esto imprime 210





function invierteCadena(str) {
    // Esta función toma un string como argumento y devuelve los caracteres en un orden inverso usando únicamente el método push
    // Usamos un array vacío para almacenar los caracteres invertidos
    let invertido = [];
    // Usamos un bucle for para recorrer el string de atrás hacia adelante
    for (let i = str.length - 1; i >= 0; i--) {
        // Usamos el método push para añadir cada caracter al final del array
        invertido.push(str[i]);
    }
    // Usamos el método join para convertir el array en un string y devolverlo
    return invertido.join("");
}
console.log(invierteCadena("hola")); // Esto imprime aloh
console.log(invierteCadena("Bing")); // Esto imprime gniB
console.log(invierteCadena("JavaScript")); // Esto imprime tpircSavaJ

*/
