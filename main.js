var milista = [5, 57, 'Hola', true, 312312];
var indice = Number(prompt('Que indice te muestro?'));
if (indice>milista.length){
    console.log('Fuera de rango')
    indice = Number(prompt('El indice no existe. Pasame otro:'));
}
console.log(milista[indice]);