/*var edad = 18;
var limite = 20;
var ciudad = "cdmx";

if(edad>=limite && ciudad=="cdmx") {
    console.log("Puedes votar")}
   else {
        console.log("no puedes votar.");
    }
*/
let autor = 'Miguel de Cervantes';

switch(autor) {
    case 'Miguel de Cervantes':
        console.log('Don Quijote');
        break;
    case 'Juan Rulfo':
        console.log('el gallo de oro');
        break;
    case 'Gabriel Garcia Marquez':
        console.log('Cien anos de soledad');
        break;
    default:
        console.log('No existe')
        break;
}