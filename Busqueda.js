//let encontrar = arreglo.find(arreglo.nombre=> arreglo.nombre === "Horacio");
//const lista = {1, 2, 3};
//const num = lista.find((elemento) => elemento===criterio);


function buscarPorMatricula(mat){
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i].matricula===mat){
            return arreglo[i];
        }
    }
}

console.log(busquedaPorMatricula);