/*
var numbers = [3, 4, 6, 7, 8, 93, 4];
var doubles = [];

for(var i = 0; i < numbers.length; i++) {
doubles.push(numbers[i] * 2);
}

console.log(numbers);
console.log(doubles);
*/

// nombre edad y hobby[]

/*let numeros = [3,4,6,7,8,93,4];

const doble = numeros.map((current, index, array) => {
    if (index % 2){
        return current * 2
    }
});
*/


//REDUCE EJEMPLO
const alumnos = [
    { nombre: 'Maria', calificaciones: [9,9,7,8,10] },
    { nombre: 'Antonio', calificaciones: [9,8,7,8,10] },
    { nombre: 'Juan', calificaciones: [9,9,7,8,2] },
    { nombre: 'Luis', calificaciones: [9,9,7,8] },
    { nombre: 'Ana', calificaciones: [9,9,7,8,10] },
    { nombre: 'Maria', calificaciones: [9,9,8,10,5] },
    { nombre: 'Pedro', calificaciones: [7,9,7,8,10] },
    { nombre: 'Julio', calificaciones: [6,0,7,8,10] },
]

var cuadrodehonor = alumnos.reduce((p,c) => {
    if ((c.calificaciones.reduce((c1,c2) => c1+c2) / 5) > 8) {
        p = [...p, c] //Esto o push.
    }
    return p;
}, []);

console.log(cuadrodehonor);








