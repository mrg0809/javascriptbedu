// Escribir en el documento HTML
document.write('<h1>HOLA MUNDO</h1>');

// Agragando hijo al body
const h1 = document.createElement('h1');
h1.innerHTML = 'Hola Mundo';
document.body.appendChild(h1);

//Saludando desde el input
function saludo(){
let nombre = document.querySelector('#nombre').value;
document.write(`<h1>HOLA ${nombre} Bienvenido.</h1>`);
console.log(nombre);
}
document.querySelector('button').addEventListener('click', saludo);


//Promedio de calificaciones
let calificaciones = [];
let promedio = 0;
function guardar(){
    calificaciones.push(Number(document.querySelector('#calif').value));
}
function fpromedio(){
    promedio = calificaciones.reduce((pre, curr) => {
        return pre + curr
    })/calificaciones.length;
    console.log(calificaciones);
    console.log(`El Promedio es de ${promedio}`);
}
document.querySelector('#guardar').addEventListener('click', guardar);
document.querySelector('#promedio').addEventListener('click', fpromedio);

//Pedir nombre edad y numero de anios para responder al usuario cuantos anios tenia hace tantos anios.
function contestacion(){
let nombrepersona = document.querySelector('#nombrepersona').value;
let edad = document.querySelector('#edad').value;
let anios = document.querySelector('#anios').value;
document.write(`<h1>HOLA ${nombrepersona} hace ${anios} anios tenias ${edad-anios} anios.</h1>`);
}
document.querySelector('#contesta').addEventListener('click', contestacion);
