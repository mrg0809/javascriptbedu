/*var milista = [5, 57, 'Hola', true, 312312];
var indice = Number(prompt('Que indice te muestro?'));
if (indice>milista.length){
    console.log('Fuera de rango')
    indice = Number(prompt('El indice no existe. Pasame otro:'));
}
console.log(milista[indice]);*/

let valor;
var arreglo = [];

switch(opcion){
    case agregar:
        valor=prompt('Que valor quieres agregar?');
        arreglo.push(valor);
        break;

    case borrar:
        valor=prompt('Que valor deseas borrar?');
        arreglo.splice(arreglo.find(valor),1);
        break;

    case imprimir:
        console.table(arreglo);
        break;

    case eliminar

}

